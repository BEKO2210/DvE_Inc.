import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// ---------------------------------------------------------------------------
// Stateful in-memory mock of the red_line_requests table.
// Interprets the specific SQL statements red-lines.ts issues so the
// fail-closed state machine can be exercised end to end.
// ---------------------------------------------------------------------------

type Row = Record<string, any>
let store: Map<number, Row>
let nextId: number
let auditEvents: any[]

function resetDb() {
  store = new Map()
  nextId = 1
  auditEvents = []
}
resetDb()

const mockPrepare = vi.fn((sql: string) => {
  const s = sql.replace(/\s+/g, ' ').trim()
  return {
    run: (...args: any[]) => {
      if (s.startsWith('INSERT INTO red_line_requests')) {
        const [action, risk_class, summary, context, requested_by, workspace_id, tenant_id, expires_at] = args
        const id = nextId++
        store.set(id, {
          id, action, risk_class, status: 'pending', summary, context: context ?? null,
          requested_by, decided_by: null, decision_reason: null, executed_by: null,
          workspace_id, tenant_id, created_at: Math.floor(Date.now() / 1000),
          decided_at: null, executed_at: null, expires_at,
        })
        return { lastInsertRowid: id, changes: 1 }
      }
      if (s.includes("SET status = 'expired'")) {
        const row = store.get(args[0])
        if (row && row.status === 'pending') { row.status = 'expired'; return { changes: 1 } }
        return { changes: 0 }
      }
      if (s.includes("SET status = 'executed'")) {
        const [executed_by, executed_at, id] = args
        const row = store.get(id)
        if (row && row.status === 'approved') {
          row.status = 'executed'; row.executed_by = executed_by; row.executed_at = executed_at
          return { changes: 1 }
        }
        return { changes: 0 }
      }
      if (s.includes("SET status = 'cancelled'")) {
        const [cancelled_by, id] = args
        const row = store.get(id)
        if (row && row.status === 'pending') {
          row.status = 'cancelled'; row.decided_by = cancelled_by
          row.decided_at = Math.floor(Date.now() / 1000)
          return { changes: 1 }
        }
        return { changes: 0 }
      }
      if (s.startsWith('UPDATE red_line_requests SET status = ?')) {
        const [status, decided_by, decision_reason, decided_at, id] = args
        const row = store.get(id)
        if (row && row.status === 'pending') {
          row.status = status; row.decided_by = decided_by
          row.decision_reason = decision_reason; row.decided_at = decided_at
          return { changes: 1 }
        }
        return { changes: 0 }
      }
      return { changes: 0 }
    },
    get: (...args: any[]) => {
      if (s.startsWith('SELECT * FROM red_line_requests WHERE id = ?')) {
        const row = store.get(args[0])
        return row ? { ...row } : undefined
      }
      return undefined
    },
    all: (...args: any[]) => {
      if (s.startsWith('SELECT * FROM red_line_requests')) {
        let rows = [...store.values()]
        const whereCols: string[] = []
        if (s.includes('status = ?')) whereCols.push('status')
        if (s.includes('workspace_id = ?')) whereCols.push('workspace_id')
        whereCols.forEach((col, i) => { rows = rows.filter((r) => r[col] === args[i]) })
        return rows.map((r) => ({ ...r })).sort((a, b) => b.created_at - a.created_at)
      }
      return []
    },
  }
})

vi.mock('@/lib/db', () => ({
  getDatabase: () => ({ prepare: mockPrepare }),
  logAuditEvent: (e: any) => { auditEvents.push(e) },
}))
vi.mock('@/lib/event-bus', () => ({ eventBus: { broadcast: vi.fn() } }))
vi.mock('@/lib/logger', () => ({ logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() } }))

import {
  RED_LINE_REGISTRY,
  isRedLineAction,
  getRedLineDefinition,
  canDecide,
  isExpired,
  createRedLineRequest,
  decideRedLineRequest,
  getRedLineRequest,
  listRedLineRequests,
  assertRedLineApproved,
  markRedLineExecuted,
  cancelRedLineRequest,
  DEFAULT_EXPIRY_HOURS,
} from '@/lib/red-lines'

beforeEach(() => {
  resetDb()
  vi.clearAllMocks()
})

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

describe('registry & pure helpers', () => {
  it('every registry entry requires admin authority', () => {
    for (const def of Object.values(RED_LINE_REGISTRY)) {
      expect(def.minRole).toBe('admin')
      expect(['high', 'critical']).toContain(def.riskClass)
    }
  })

  it('isRedLineAction recognises known actions and rejects others', () => {
    expect(isRedLineAction('payment')).toBe(true)
    expect(isRedLineAction('contract_sign')).toBe(true)
    expect(isRedLineAction('send_tweet')).toBe(false)
    expect(isRedLineAction('')).toBe(false)
    expect(isRedLineAction(null)).toBe(false)
    expect(isRedLineAction(42)).toBe(false)
  })

  it('getRedLineDefinition returns the definition or undefined', () => {
    expect(getRedLineDefinition('payment')?.riskClass).toBe('critical')
    expect(getRedLineDefinition('production_deploy')?.riskClass).toBe('high')
    expect(getRedLineDefinition('nonsense')).toBeUndefined()
  })

  it('canDecide enforces role authority (fail closed for low roles)', () => {
    expect(canDecide('admin', 'payment')).toBe(true)
    expect(canDecide('operator', 'payment')).toBe(false)
    expect(canDecide('viewer', 'payment')).toBe(false)
    expect(canDecide('intern', 'payment')).toBe(false)
    expect(canDecide('', 'payment')).toBe(false)
  })

  it('isExpired compares against now', () => {
    const now = 1_000_000
    expect(isExpired(now - 1, now)).toBe(true)
    expect(isExpired(now, now)).toBe(true)
    expect(isExpired(now + 1, now)).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// createRedLineRequest
// ---------------------------------------------------------------------------

describe('createRedLineRequest', () => {
  it('creates a pending request for a known action', () => {
    const req = createRedLineRequest({
      action: 'invoice_send',
      summary: 'Send invoice #1 to Studio Cedar',
      requestedBy: 'cfo-agent',
    })
    expect(req.id).toBe(1)
    expect(req.status).toBe('pending')
    expect(req.risk_class).toBe('critical')
    expect(req.requested_by).toBe('cfo-agent')
    expect(req.expires_at).toBeGreaterThan(req.created_at)
  })

  it('writes an audit event on creation', () => {
    createRedLineRequest({ action: 'payment', summary: 'Pay vendor', requestedBy: 'cfo-agent' })
    expect(auditEvents).toHaveLength(1)
    expect(auditEvents[0].action).toBe('red_line.requested')
    expect(auditEvents[0].actor).toBe('cfo-agent')
  })

  it('rejects an unknown action (fail closed)', () => {
    expect(() =>
      createRedLineRequest({ action: 'delete_database', summary: 'x', requestedBy: 'agent' }),
    ).toThrow(/Unknown red-line action/)
  })

  it('rejects an empty summary or actor', () => {
    expect(() =>
      createRedLineRequest({ action: 'payment', summary: '   ', requestedBy: 'agent' }),
    ).toThrow(/summary/)
    expect(() =>
      createRedLineRequest({ action: 'payment', summary: 'ok', requestedBy: '' }),
    ).toThrow(/requestedBy/)
  })

  it('uses the default expiry window when none is given', () => {
    const before = Math.floor(Date.now() / 1000)
    const req = createRedLineRequest({ action: 'payment', summary: 'x', requestedBy: 'agent' })
    expect(req.expires_at).toBeGreaterThanOrEqual(before + DEFAULT_EXPIRY_HOURS * 3600)
  })
})

// ---------------------------------------------------------------------------
// decideRedLineRequest
// ---------------------------------------------------------------------------

describe('decideRedLineRequest', () => {
  it('approves a pending request when the role is authorised', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay vendor', requestedBy: 'cfo-agent' })
    const decided = decideRedLineRequest({
      requestId: req.id,
      decision: 'approved',
      decidedBy: 'founder',
      decidedByRole: 'admin',
      reason: 'verified invoice',
    })
    expect(decided.status).toBe('approved')
    expect(decided.decided_by).toBe('founder')
    expect(decided.decision_reason).toBe('verified invoice')
  })

  it('rejects a pending request', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay vendor', requestedBy: 'cfo-agent' })
    const decided = decideRedLineRequest({
      requestId: req.id, decision: 'rejected', decidedBy: 'founder', decidedByRole: 'admin',
    })
    expect(decided.status).toBe('rejected')
  })

  it('refuses a decision from an under-authorised role (fail closed)', () => {
    const req = createRedLineRequest({ action: 'contract_sign', summary: 'Sign NDA', requestedBy: 'clo-agent' })
    expect(() =>
      decideRedLineRequest({
        requestId: req.id, decision: 'approved', decidedBy: 'op', decidedByRole: 'operator',
      }),
    ).toThrow(/not authorised/)
    expect(getRedLineRequest(req.id)?.status).toBe('pending')
  })

  it('refuses to decide a request that is not pending (no double decision)', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })
    expect(() =>
      decideRedLineRequest({ requestId: req.id, decision: 'rejected', decidedBy: 'founder', decidedByRole: 'admin' }),
    ).toThrow(/not 'pending'/)
  })

  it('throws on a missing request', () => {
    expect(() =>
      decideRedLineRequest({ requestId: 999, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' }),
    ).toThrow(/not found/)
  })

  it('rejects an invalid decision value', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    expect(() =>
      decideRedLineRequest({
        requestId: req.id, decision: 'maybe' as any, decidedBy: 'founder', decidedByRole: 'admin',
      }),
    ).toThrow(/Invalid decision/)
  })
})

// ---------------------------------------------------------------------------
// assertRedLineApproved — the gate
// ---------------------------------------------------------------------------

describe('assertRedLineApproved', () => {
  it('returns the request when approved', () => {
    const req = createRedLineRequest({ action: 'production_deploy', summary: 'Deploy Aurora', requestedBy: 'cto-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })
    expect(assertRedLineApproved(req.id).status).toBe('approved')
  })

  it('throws for a pending request (default deny)', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    expect(() => assertRedLineApproved(req.id)).toThrow(/not 'approved'/)
  })

  it('throws for a rejected request', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'rejected', decidedBy: 'founder', decidedByRole: 'admin' })
    expect(() => assertRedLineApproved(req.id)).toThrow(/not 'approved'/)
  })

  it('throws for a missing request', () => {
    expect(() => assertRedLineApproved(12345)).toThrow(/not found/)
  })
})

// ---------------------------------------------------------------------------
// markRedLineExecuted — single-use approvals
// ---------------------------------------------------------------------------

describe('markRedLineExecuted', () => {
  it('transitions an approved request to executed', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })
    const executed = markRedLineExecuted(req.id, 'cfo-agent')
    expect(executed.status).toBe('executed')
    expect(executed.executed_by).toBe('cfo-agent')
  })

  it('prevents replay — an executed approval cannot be executed again', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })
    markRedLineExecuted(req.id, 'cfo-agent')
    expect(() => markRedLineExecuted(req.id, 'cfo-agent')).toThrow(/not 'approved'/)
  })

  it('refuses to execute a request that was never approved', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    expect(() => markRedLineExecuted(req.id, 'cfo-agent')).toThrow(/not 'approved'/)
  })
})

// ---------------------------------------------------------------------------
// Expiry
// ---------------------------------------------------------------------------

describe('expiry', () => {
  afterEach(() => vi.useRealTimers())

  it('flips a pending request to expired once its window passes', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
    const req = createRedLineRequest({
      action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent', expiryHours: 1,
    })
    vi.setSystemTime(new Date('2026-01-01T02:00:00Z'))
    expect(getRedLineRequest(req.id)?.status).toBe('expired')
  })

  it('an expired request cannot be decided or used as a gate', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
    const req = createRedLineRequest({
      action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent', expiryHours: 1,
    })
    vi.setSystemTime(new Date('2026-01-01T05:00:00Z'))
    expect(() =>
      decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' }),
    ).toThrow(/not 'pending'/)
    expect(() => assertRedLineApproved(req.id)).toThrow(/not 'approved'/)
  })
})

// ---------------------------------------------------------------------------
// cancel & list
// ---------------------------------------------------------------------------

describe('cancelRedLineRequest', () => {
  it('cancels a pending request', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    expect(cancelRedLineRequest(req.id, 'founder').status).toBe('cancelled')
  })

  it('cannot cancel an already-decided request', () => {
    const req = createRedLineRequest({ action: 'payment', summary: 'Pay', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })
    expect(() => cancelRedLineRequest(req.id, 'founder')).toThrow(/not 'pending'/)
  })
})

describe('listRedLineRequests', () => {
  it('lists all requests and filters by status', () => {
    const a = createRedLineRequest({ action: 'payment', summary: 'A', requestedBy: 'cfo-agent' })
    createRedLineRequest({ action: 'payment', summary: 'B', requestedBy: 'cfo-agent' })
    decideRedLineRequest({ requestId: a.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin' })

    expect(listRedLineRequests()).toHaveLength(2)
    expect(listRedLineRequests({ status: 'pending' })).toHaveLength(1)
    expect(listRedLineRequests({ status: 'approved' })).toHaveLength(1)
  })

  it('filters by workspace', () => {
    createRedLineRequest({ action: 'payment', summary: 'ws1', requestedBy: 'agent', workspaceId: 1 })
    createRedLineRequest({ action: 'payment', summary: 'ws2', requestedBy: 'agent', workspaceId: 2 })
    expect(listRedLineRequests({ workspaceId: 2 })).toHaveLength(1)
    expect(listRedLineRequests({ workspaceId: 2 })[0].summary).toBe('ws2')
  })
})

// ---------------------------------------------------------------------------
// Full happy path
// ---------------------------------------------------------------------------

describe('end-to-end red-line flow', () => {
  it('request → approve → assert → execute', () => {
    const req = createRedLineRequest({
      action: 'invoice_send',
      summary: 'Send invoice #1 to Studio Cedar (1.200 EUR)',
      requestedBy: 'cfo-agent',
      context: { invoiceId: 1, amountEur: 1200 },
    })
    expect(req.status).toBe('pending')

    decideRedLineRequest({
      requestId: req.id, decision: 'approved', decidedBy: 'founder', decidedByRole: 'admin',
    })

    const gated = assertRedLineApproved(req.id)
    expect(gated.status).toBe('approved')

    const done = markRedLineExecuted(req.id, 'cfo-agent')
    expect(done.status).toBe('executed')

    // The full lifecycle is on the audit trail.
    const actions = auditEvents.map((e) => e.action)
    expect(actions).toEqual(['red_line.requested', 'red_line.approved', 'red_line.executed'])
  })
})
