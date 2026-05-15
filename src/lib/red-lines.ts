/**
 * Business Red Lines — human-in-the-loop approval gates for company actions
 * that touch money, legal standing, security, liability, or are otherwise
 * hard to reverse.
 *
 * From THE_COMPANY_BLUEPRINT.md (chapters 5.7, 10.x, 16.5): the founder is
 * always "in command" and stays "in the loop" for red-line actions. No agent
 * may cross a red line autonomously.
 *
 * Design principle: FAIL CLOSED. An action behind a red line does not execute
 * unless a human with sufficient authority has explicitly approved that
 * specific request. The default is deny. Every request and every decision is
 * written to the audit log. An approval is single-use: once executed it
 * cannot be silently replayed.
 *
 * Typical flow:
 *   1. An agent (or operator) calls `createRedLineRequest(...)` instead of
 *      performing the action — this returns a pending request.
 *   2. A human reviews it and calls `decideRedLineRequest(...)` to approve or
 *      reject. Only a user whose role meets the action's `minRole` may decide.
 *   3. The executing code calls `assertRedLineApproved(id)` immediately before
 *      acting — this throws unless the request is approved and not expired.
 *   4. After acting, the code calls `markRedLineExecuted(id, ...)` so the
 *      approval cannot be reused.
 */

import { getDatabase, logAuditEvent } from '@/lib/db'
import { eventBus } from '@/lib/event-bus'
import { logger } from '@/lib/logger'

// ---------------------------------------------------------------------------
// Types & registry
// ---------------------------------------------------------------------------

/** Roles that can exist in the system, ordered by authority (low → high). */
export type DecisionRole = 'viewer' | 'operator' | 'admin'

const ROLE_RANK: Record<DecisionRole, number> = {
  viewer: 0,
  operator: 1,
  admin: 2,
}

/** The catalogue of red-line action types. Adding one here makes it gateable. */
export type RedLineAction =
  | 'payment' // sending money / executing a payment
  | 'invoice_send' // sending an invoice to a customer
  | 'contract_sign' // concluding or signing a contract / terms
  | 'pricing_approval' // making a price or offer binding
  | 'production_deploy' // deploying to production
  | 'human_engagement' // hiring / commissioning a human (freelancer, employee)
  | 'authority_contact' // contacting authorities / regulators
  | 'external_comms' // outbound communication in reputation-sensitive matters
  | 'data_export' // exporting or sharing sensitive data

export type RiskClass = 'high' | 'critical'

export type RedLineRequestStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'expired'
  | 'executed'
  | 'cancelled'

export interface RedLineDefinition {
  action: RedLineAction
  label: string
  description: string
  /** Minimum role required to approve or reject a request for this action. */
  minRole: DecisionRole
  riskClass: RiskClass
}

/**
 * The red-line registry. Every entry requires `admin` (the founder) to decide:
 * per the blueprint these are explicitly founder-level decisions. `critical`
 * covers money, legal and liability; `high` covers the rest.
 */
export const RED_LINE_REGISTRY: Record<RedLineAction, RedLineDefinition> = {
  payment: {
    action: 'payment',
    label: 'Zahlung ausführen',
    description: 'Geld senden oder eine Zahlung auslösen.',
    minRole: 'admin',
    riskClass: 'critical',
  },
  invoice_send: {
    action: 'invoice_send',
    label: 'Rechnung versenden',
    description: 'Eine Rechnung an einen Kunden versenden.',
    minRole: 'admin',
    riskClass: 'critical',
  },
  contract_sign: {
    action: 'contract_sign',
    label: 'Vertrag abschließen',
    description: 'Einen Vertrag oder verbindliche Bedingungen abschließen.',
    minRole: 'admin',
    riskClass: 'critical',
  },
  pricing_approval: {
    action: 'pricing_approval',
    label: 'Preis / Angebot freigeben',
    description: 'Einen Preis oder ein Angebot verbindlich machen.',
    minRole: 'admin',
    riskClass: 'critical',
  },
  production_deploy: {
    action: 'production_deploy',
    label: 'Produktiv-Deployment',
    description: 'Eine Auslieferung in die Produktivumgebung freigeben.',
    minRole: 'admin',
    riskClass: 'high',
  },
  human_engagement: {
    action: 'human_engagement',
    label: 'Menschen beauftragen',
    description: 'Eine Person beauftragen oder einstellen (Freelancer, Angestellte).',
    minRole: 'admin',
    riskClass: 'high',
  },
  authority_contact: {
    action: 'authority_contact',
    label: 'Behördenkontakt',
    description: 'Behörden oder Aufsichtsstellen kontaktieren.',
    minRole: 'admin',
    riskClass: 'critical',
  },
  external_comms: {
    action: 'external_comms',
    label: 'Externe Kommunikation (Reputation)',
    description: 'Außenkommunikation in reputationssensiblen Angelegenheiten.',
    minRole: 'admin',
    riskClass: 'high',
  },
  data_export: {
    action: 'data_export',
    label: 'Datenexport',
    description: 'Sensible Daten exportieren oder weitergeben.',
    minRole: 'admin',
    riskClass: 'high',
  },
}

/** Default window in which a pending request must be decided before it expires. */
export const DEFAULT_EXPIRY_HOURS = 72

// ---------------------------------------------------------------------------
// Pure helpers (no database access — safe to unit test directly)
// ---------------------------------------------------------------------------

export function isRedLineAction(value: unknown): value is RedLineAction {
  return typeof value === 'string' && value in RED_LINE_REGISTRY
}

export function getRedLineDefinition(action: string): RedLineDefinition | undefined {
  return isRedLineAction(action) ? RED_LINE_REGISTRY[action] : undefined
}

/** True when `role` meets or exceeds the authority required to decide `action`. */
export function canDecide(role: string, action: RedLineAction): boolean {
  const def = RED_LINE_REGISTRY[action]
  const actorRank = ROLE_RANK[role as DecisionRole]
  if (actorRank === undefined) return false
  return actorRank >= ROLE_RANK[def.minRole]
}

/** True when an epoch-seconds expiry timestamp is in the past. */
export function isExpired(expiresAt: number, now: number = Math.floor(Date.now() / 1000)): boolean {
  return expiresAt <= now
}

// ---------------------------------------------------------------------------
// Database row type
// ---------------------------------------------------------------------------

export interface RedLineRequest {
  id: number
  action: RedLineAction
  risk_class: RiskClass
  status: RedLineRequestStatus
  summary: string
  context?: string // JSON string
  requested_by: string
  decided_by?: string
  decision_reason?: string
  executed_by?: string
  workspace_id: number
  tenant_id: number
  created_at: number
  decided_at?: number
  executed_at?: number
  expires_at: number
}

// ---------------------------------------------------------------------------
// Database operations
// ---------------------------------------------------------------------------

function fetchRequest(id: number): RedLineRequest | undefined {
  const db = getDatabase()
  return db
    .prepare('SELECT * FROM red_line_requests WHERE id = ?')
    .get(id) as RedLineRequest | undefined
}

/**
 * Lazily flips a pending-but-past-expiry request to `expired` and audits it.
 * Returns the (possibly updated) request so callers always see fresh status.
 */
function reconcileExpiry(req: RedLineRequest): RedLineRequest {
  if (req.status !== 'pending' || !isExpired(req.expires_at)) return req

  const db = getDatabase()
  db.prepare(
    `UPDATE red_line_requests SET status = 'expired' WHERE id = ? AND status = 'pending'`,
  ).run(req.id)

  logAuditEvent({
    action: 'red_line.expired',
    actor: 'system',
    target_type: 'red_line_request',
    target_id: req.id,
    detail: { red_line_action: req.action },
  })

  return { ...req, status: 'expired' }
}

export function getRedLineRequest(id: number): RedLineRequest | undefined {
  const req = fetchRequest(id)
  return req ? reconcileExpiry(req) : undefined
}

export function listRedLineRequests(
  opts: { status?: RedLineRequestStatus; workspaceId?: number } = {},
): RedLineRequest[] {
  const db = getDatabase()
  const clauses: string[] = []
  const params: unknown[] = []

  if (opts.status) {
    clauses.push('status = ?')
    params.push(opts.status)
  }
  if (opts.workspaceId !== undefined) {
    clauses.push('workspace_id = ?')
    params.push(opts.workspaceId)
  }

  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : ''
  const rows = db
    .prepare(`SELECT * FROM red_line_requests ${where} ORDER BY created_at DESC`)
    .all(...params) as RedLineRequest[]

  return rows.map(reconcileExpiry)
}

/**
 * Create a pending red-line request. This is what an agent calls *instead of*
 * performing the action. Throws on an unknown action (fail closed — an
 * unrecognised action is never silently allowed through).
 */
export function createRedLineRequest(input: {
  action: string
  summary: string
  requestedBy: string
  context?: Record<string, unknown>
  workspaceId?: number
  tenantId?: number
  expiryHours?: number
}): RedLineRequest {
  const def = getRedLineDefinition(input.action)
  if (!def) {
    throw new Error(`Unknown red-line action: ${input.action}`)
  }
  if (!input.summary?.trim()) {
    throw new Error('Red-line request requires a non-empty summary')
  }
  if (!input.requestedBy?.trim()) {
    throw new Error('Red-line request requires a requestedBy actor')
  }

  const db = getDatabase()
  const workspaceId = input.workspaceId ?? 1
  const tenantId = input.tenantId ?? 1
  const expiryHours = input.expiryHours ?? DEFAULT_EXPIRY_HOURS
  const now = Math.floor(Date.now() / 1000)
  const expiresAt = now + expiryHours * 3600

  const result = db
    .prepare(
      `INSERT INTO red_line_requests
        (action, risk_class, status, summary, context, requested_by, workspace_id, tenant_id, expires_at)
       VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      def.action,
      def.riskClass,
      input.summary.trim(),
      input.context ? JSON.stringify(input.context) : null,
      input.requestedBy.trim(),
      workspaceId,
      tenantId,
      expiresAt,
    )

  const id = result.lastInsertRowid as number

  logAuditEvent({
    action: 'red_line.requested',
    actor: input.requestedBy.trim(),
    target_type: 'red_line_request',
    target_id: id,
    detail: { red_line_action: def.action, risk_class: def.riskClass, summary: input.summary.trim() },
  })

  eventBus.broadcast('red_line.requested', {
    id,
    action: def.action,
    risk_class: def.riskClass,
    summary: input.summary.trim(),
    requested_by: input.requestedBy.trim(),
    workspace_id: workspaceId,
    timestamp: now,
  })

  logger.info(
    { redLineRequestId: id, action: def.action, requestedBy: input.requestedBy.trim() },
    'Red-line request created',
  )

  const created = fetchRequest(id)
  if (!created) {
    // Should be unreachable — insert succeeded one statement earlier.
    throw new Error(`Failed to read back red-line request ${id}`)
  }
  return created
}

/**
 * Approve or reject a pending red-line request. Fail-closed: throws if the
 * request is missing, not pending, expired, or if the deciding user's role
 * does not meet the action's required authority.
 */
export function decideRedLineRequest(input: {
  requestId: number
  decision: 'approved' | 'rejected'
  decidedBy: string
  decidedByRole: string
  reason?: string
}): RedLineRequest {
  if (input.decision !== 'approved' && input.decision !== 'rejected') {
    throw new Error(`Invalid decision: ${input.decision}`)
  }
  if (!input.decidedBy?.trim()) {
    throw new Error('A red-line decision requires a decidedBy actor')
  }

  const req = getRedLineRequest(input.requestId)
  if (!req) {
    throw new Error(`Red-line request ${input.requestId} not found`)
  }
  if (req.status !== 'pending') {
    throw new Error(
      `Red-line request ${input.requestId} is '${req.status}', not 'pending' — it cannot be decided again`,
    )
  }
  if (!canDecide(input.decidedByRole, req.action)) {
    throw new Error(
      `Role '${input.decidedByRole}' is not authorised to decide red-line action '${req.action}' ` +
        `(requires '${RED_LINE_REGISTRY[req.action].minRole}')`,
    )
  }

  const db = getDatabase()
  const now = Math.floor(Date.now() / 1000)
  db.prepare(
    `UPDATE red_line_requests
       SET status = ?, decided_by = ?, decision_reason = ?, decided_at = ?
     WHERE id = ? AND status = 'pending'`,
  ).run(input.decision, input.decidedBy.trim(), input.reason?.trim() ?? null, now, req.id)

  logAuditEvent({
    action: input.decision === 'approved' ? 'red_line.approved' : 'red_line.rejected',
    actor: input.decidedBy.trim(),
    target_type: 'red_line_request',
    target_id: req.id,
    detail: { red_line_action: req.action, reason: input.reason?.trim() ?? null },
  })

  eventBus.broadcast('red_line.decided', {
    id: req.id,
    action: req.action,
    status: input.decision,
    decided_by: input.decidedBy.trim(),
    workspace_id: req.workspace_id,
    timestamp: now,
  })

  logger.info(
    { redLineRequestId: req.id, action: req.action, decision: input.decision, decidedBy: input.decidedBy.trim() },
    'Red-line request decided',
  )

  const updated = fetchRequest(req.id)
  if (!updated) {
    throw new Error(`Failed to read back red-line request ${req.id}`)
  }
  return updated
}

/**
 * THE GATE. Call this immediately before performing a red-line action.
 * Returns the request when it is approved and still valid; throws otherwise.
 * This is the fail-closed check — never perform a red-line action without it.
 */
export function assertRedLineApproved(requestId: number): RedLineRequest {
  const req = getRedLineRequest(requestId)
  if (!req) {
    throw new Error(`Red-line request ${requestId} not found — action denied`)
  }
  if (req.status === 'approved') {
    return req
  }
  throw new Error(
    `Red-line request ${requestId} is '${req.status}', not 'approved' — action denied`,
  )
}

/**
 * Mark an approved request as executed so its approval cannot be replayed.
 * Fail-closed: only an approved request can transition to executed.
 */
export function markRedLineExecuted(requestId: number, executedBy: string): RedLineRequest {
  if (!executedBy?.trim()) {
    throw new Error('markRedLineExecuted requires an executedBy actor')
  }

  const req = assertRedLineApproved(requestId)

  const db = getDatabase()
  const now = Math.floor(Date.now() / 1000)
  db.prepare(
    `UPDATE red_line_requests
       SET status = 'executed', executed_by = ?, executed_at = ?
     WHERE id = ? AND status = 'approved'`,
  ).run(executedBy.trim(), now, req.id)

  logAuditEvent({
    action: 'red_line.executed',
    actor: executedBy.trim(),
    target_type: 'red_line_request',
    target_id: req.id,
    detail: { red_line_action: req.action },
  })

  logger.info(
    { redLineRequestId: req.id, action: req.action, executedBy: executedBy.trim() },
    'Red-line request executed',
  )

  const updated = fetchRequest(req.id)
  if (!updated) {
    throw new Error(`Failed to read back red-line request ${req.id}`)
  }
  return updated
}

/**
 * Cancel a still-pending request (e.g. the underlying task was abandoned).
 * Does not require decision authority — cancelling never authorises anything.
 */
export function cancelRedLineRequest(requestId: number, cancelledBy: string): RedLineRequest {
  if (!cancelledBy?.trim()) {
    throw new Error('cancelRedLineRequest requires a cancelledBy actor')
  }

  const req = getRedLineRequest(requestId)
  if (!req) {
    throw new Error(`Red-line request ${requestId} not found`)
  }
  if (req.status !== 'pending') {
    throw new Error(`Red-line request ${requestId} is '${req.status}', not 'pending' — cannot cancel`)
  }

  const db = getDatabase()
  db.prepare(
    `UPDATE red_line_requests SET status = 'cancelled', decided_by = ?, decided_at = unixepoch()
     WHERE id = ? AND status = 'pending'`,
  ).run(cancelledBy.trim(), req.id)

  logAuditEvent({
    action: 'red_line.cancelled',
    actor: cancelledBy.trim(),
    target_type: 'red_line_request',
    target_id: req.id,
    detail: { red_line_action: req.action },
  })

  const updated = fetchRequest(req.id)
  if (!updated) {
    throw new Error(`Failed to read back red-line request ${req.id}`)
  }
  return updated
}
