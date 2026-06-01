---
name: eventzilla
description: "Eventzilla (eventzilla.net). Use this skill for ANY Eventzilla request — searching and reading data. Whenever a task involves Eventzilla, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Eventzilla"
  author: "OOMOL"
  version: "1.0.0"
  service: "eventzilla"
  categories: "Productivity, Marketing"
  homepage: "https://www.eventzilla.net"
  icon: "https://static.oomol.com/logo/third-party/eventzilla.svg"
---

# Eventzilla

Operate **Eventzilla** through your OOMOL-connected account. This skill calls the `eventzilla` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Eventzilla. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "eventzilla" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "eventzilla" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_attendee`](actions/get_attendee.md) — Get one Eventzilla attendee by attendee identifier.
- [`get_event`](actions/get_event.md) — Get one Eventzilla event by its event identifier.
- [`get_transaction`](actions/get_transaction.md) — Get one Eventzilla transaction by checkout ID or order reference number.
- [`get_user`](actions/get_user.md) — Get one Eventzilla organizer or sub-organizer by user identifier.
- [`list_event_attendees`](actions/list_event_attendees.md) — List Eventzilla attendees for one event.
- [`list_event_tickets`](actions/list_event_tickets.md) — List Eventzilla ticket categories and donation entries for one event.
- [`list_event_transactions`](actions/list_event_transactions.md) — List Eventzilla transactions for one event.
- [`list_events`](actions/list_events.md) — List Eventzilla events visible to the authenticated organizer account with optional status or category filtering.
- [`list_users`](actions/list_users.md) — List Eventzilla organizers and sub-organizers visible to the authenticated account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Eventzilla state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Eventzilla is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=eventzilla
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Eventzilla homepage: https://www.eventzilla.net
