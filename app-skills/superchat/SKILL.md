---
name: superchat
description: "Superchat (superchat.com). Use this skill for ANY Superchat request — reading, creating, and updating data. Whenever a task involves Superchat, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Superchat"
  author: "OOMOL"
  version: "1.0.0"
  service: "superchat"
  categories: "Communication, Marketing"
  homepage: "https://www.superchat.com"
  icon: "https://static.oomol.com/logo/third-party/superchat.png"
---

# Superchat

Operate **Superchat** through your OOMOL-connected account. This skill calls the `superchat` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Superchat. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "superchat" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "superchat" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create one Superchat contact with handles and optional custom attributes.
- [`get_channel`](actions/get_channel.md) — Get one Superchat channel by channel_id.
- [`get_contact`](actions/get_contact.md) — Get one Superchat contact by contact_id.
- [`get_me`](actions/get_me.md) — Retrieve the authenticated Superchat user and workspace summary.
- [`list_channels`](actions/list_channels.md) — List Superchat channels in the current workspace.
- [`list_contacts`](actions/list_contacts.md) — List Superchat contacts in the current workspace.
- [`search_contacts`](actions/search_contacts.md) — Search Superchat contacts by phone, email, or one selected custom attribute field.
- [`send_email_message`](actions/send_email_message.md) — Send one Superchat email message through a selected email channel.
- [`send_text_message`](actions/send_text_message.md) — Send one Superchat text message through a selected channel.
- [`send_whatsapp_template_message`](actions/send_whatsapp_template_message.md) — Send one Superchat WhatsApp template message through a selected channel.
- [`update_contact`](actions/update_contact.md) — Update one Superchat contact by contact_id.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Superchat state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Superchat is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=superchat
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Superchat homepage: https://www.superchat.com
