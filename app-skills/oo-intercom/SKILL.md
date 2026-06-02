---
name: oo-intercom
description: "Intercom (intercom.com). Use this skill for ANY Intercom request — reading, creating, and updating data. Whenever a task involves Intercom, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Intercom"
  author: "OOMOL"
  version: "1.0.0"
  service: "intercom"
  categories: "Communication, Productivity"
  homepage: "https://www.intercom.com"
  icon: "https://static.oomol.com/logo/third-party/Intercom.svg"
---

# Intercom

Operate **Intercom** through your OOMOL-connected account. This skill calls the `intercom` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Intercom. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "intercom" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "intercom" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`close_conversation`](actions/close_conversation.md) — Close an Intercom conversation.
- [`create_contact`](actions/create_contact.md) — Create a new Intercom contact.
- [`get_admin`](actions/get_admin.md) — Get a single Intercom admin by identifier.
- [`get_contact`](actions/get_contact.md) — Get a single Intercom contact by identifier.
- [`get_contact_by_external_id`](actions/get_contact_by_external_id.md) — Get a single Intercom contact by external ID.
- [`get_conversation`](actions/get_conversation.md) — Get a single Intercom conversation with its conversation parts.
- [`get_current_admin`](actions/get_current_admin.md) — Get the currently authorized Intercom admin and workspace metadata.
- [`list_admins`](actions/list_admins.md) — List Intercom admins for the current workspace.
- [`list_contacts`](actions/list_contacts.md) — List Intercom contacts with cursor-based pagination.
- [`list_conversations`](actions/list_conversations.md) — List Intercom conversations with cursor-based pagination.
- [`reopen_conversation`](actions/reopen_conversation.md) — Reopen an Intercom conversation.
- [`reply_to_conversation`](actions/reply_to_conversation.md) — Reply to an Intercom conversation as an admin.
- [`search_contacts`](actions/search_contacts.md) — Search Intercom contacts with the official search DSL.
- [`update_contact`](actions/update_contact.md) — Update an existing Intercom contact.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Intercom state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Intercom is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=intercom
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Intercom homepage: https://www.intercom.com
