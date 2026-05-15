# NOTICE

## The Company OS

"The Company OS" is the operating system described in
`docs/THE_COMPANY_BLUEPRINT.md` — an AI-native company run by a human
who stays in command, operated by a system of specialized agents.

## Upstream / Attribution

This project is a fork of **Mission Control** ("OpenClaw Mission Control"),
an open-source AI agent orchestration dashboard.

- Original project: https://github.com/builderz-labs/mission-control
- Original author: Builderz Labs
- Original license: MIT (see `LICENSE`)
- Fork point: v2.0.1 (commit 85215c5, 2026-05-07)

The upstream MIT license is retained unmodified in `LICENSE`, including the
original copyright notice, as required. All original copyright and license
notices in source files are kept intact.

## What this fork adds

The Company OS builds company-specific logic on top of the Mission Control
foundation, in line with the blueprint:

- **Business red lines** — human-in-the-loop approval gates for money, legal,
  security, and liability actions (payments, invoicing, contracts, pricing,
  production deployment). See `src/lib/red-lines.ts`.
- Further layers (order workflow, CFO/digital twin, agent roster) are tracked
  in the blueprint roadmap.

## Trademarks

"Mission Control" and "OpenClaw" are names used by the upstream project. The
MIT license covers the source code, not these names. This fork is being
rebranded to "The Company OS"; any remaining upstream names are residual and
are being removed incrementally.
