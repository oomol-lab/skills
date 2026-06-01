---
name: freshdesk
description: "Freshdesk (freshworks.com). Use this skill for ANY Freshdesk request — searching and reading data. Whenever a task involves Freshdesk, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Freshdesk"
  author: "OOMOL"
  version: "1.0.0"
  service: "freshdesk"
  categories: "Communication, Productivity"
  homepage: "https://www.freshworks.com/freshdesk/"
  icon: "https://static.oomol.com/logo/third-party/Freshdesk.svg"
---

# Freshdesk

Operate **Freshdesk** through your OOMOL-connected account. This skill calls the `freshdesk` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Freshdesk. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "freshdesk" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "freshdesk" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_account`](actions/get_account.md) — Get Freshdesk account details for the current API key.
- [`get_ticket`](actions/get_ticket.md) — Get a single Freshdesk ticket by identifier.
- [`list_ticket_conversations`](actions/list_ticket_conversations.md) — List conversations attached to a Freshdesk ticket.
- [`list_tickets`](actions/list_tickets.md) — List Freshdesk tickets with optional filters and include expansions.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Freshdesk state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Freshdesk is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=freshdesk
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Freshdesk homepage: https://www.freshworks.com/freshdesk/
