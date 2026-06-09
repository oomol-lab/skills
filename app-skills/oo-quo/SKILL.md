---
name: oo-quo
description: "Quo (quo.com). Use this skill for ANY Quo request — reading, creating, updating, and deleting data. Whenever a task involves Quo, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Quo"
  author: "OOMOL"
  version: "1.0.0"
  service: "quo"
  categories: "Communication"
  homepage: "https://www.quo.com"
---

# Quo

Operate **Quo** through your OOMOL-connected account. This skill calls the `quo` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Quo. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "quo" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "quo" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create a contact in the connected Quo workspace.
- [`delete_contact`](actions/delete_contact.md) — Delete a contact from the connected Quo workspace.
- [`get_contact`](actions/get_contact.md) — Get details for a Quo contact by ID.
- [`get_message`](actions/get_message.md) — Get details for a Quo message by ID.
- [`get_phone_number`](actions/get_phone_number.md) — Get details for a Quo phone number by ID.
- [`get_user`](actions/get_user.md) — Get details for a Quo user by ID.
- [`list_contacts`](actions/list_contacts.md) — List contacts in the connected Quo workspace with optional filters.
- [`list_messages`](actions/list_messages.md) — List messages exchanged between a Quo number and conversation participants.
- [`list_phone_numbers`](actions/list_phone_numbers.md) — List phone numbers in the connected Quo workspace.
- [`list_users`](actions/list_users.md) — List users in the connected Quo workspace.
- [`send_text_message`](actions/send_text_message.md) — Send a text message from a Quo phone number.
- [`update_contact`](actions/update_contact.md) — Update a contact in the connected Quo workspace.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Quo state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Quo is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=quo
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Quo homepage: https://www.quo.com
