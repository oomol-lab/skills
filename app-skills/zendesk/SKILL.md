---
name: zendesk
description: "Zendesk (zendesk.com). Use this skill for ANY Zendesk request — reading, creating, and updating data. Whenever a task involves Zendesk, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Zendesk"
  author: "OOMOL"
  version: "1.0.0"
  service: "zendesk"
  categories: "Communication, Productivity"
  homepage: "https://www.zendesk.com"
  icon: "https://static.oomol.com/logo/third-party/Zendesk.svg"
---

# Zendesk

Operate **Zendesk** through your OOMOL-connected account. This skill calls the `zendesk` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Zendesk. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "zendesk" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "zendesk" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_ticket`](actions/create_ticket.md) — Create a Zendesk ticket with an initial comment.
- [`get_current_user`](actions/get_current_user.md) — Get the current authenticated Zendesk user.
- [`get_organization`](actions/get_organization.md) — Get a Zendesk organization by identifier.
- [`get_ticket`](actions/get_ticket.md) — Get a Zendesk ticket and its comments by identifier.
- [`get_user`](actions/get_user.md) — Get a Zendesk user by identifier.
- [`list_organizations`](actions/list_organizations.md) — List Zendesk organizations with pagination.
- [`list_tickets`](actions/list_tickets.md) — List Zendesk tickets with offset or cursor pagination.
- [`list_users`](actions/list_users.md) — List Zendesk users with optional role and pagination filters.
- [`reply_to_ticket`](actions/reply_to_ticket.md) — Append a public reply or internal note to a Zendesk ticket.
- [`search_users`](actions/search_users.md) — Search Zendesk users by email address or name.
- [`update_ticket`](actions/update_ticket.md) — Update fields on an existing Zendesk ticket.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Zendesk state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Zendesk is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=zendesk
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Zendesk homepage: https://www.zendesk.com
