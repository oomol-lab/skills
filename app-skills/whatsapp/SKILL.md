---
name: whatsapp
description: "WhatsApp (whatsapp.com). Use this skill for ANY WhatsApp request — reading, creating, updating, and deleting data. Whenever a task involves WhatsApp, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "WhatsApp"
  author: "OOMOL"
  version: "1.0.0"
  service: "whatsapp"
  categories: "Communication"
  homepage: "https://www.whatsapp.com"
  icon: "https://static.oomol.com/logo/third-party/whatsapp.svg"
---

# WhatsApp

Operate **WhatsApp** through your OOMOL-connected account. This skill calls the `whatsapp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication. Exposes 17 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected WhatsApp. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "whatsapp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "whatsapp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_message_template`](actions/create_message_template.md) — Create a new WhatsApp message template for a WABA.
- [`delete_message_template`](actions/delete_message_template.md) — Delete all message template variants that share the same name.
- [`get_business_profile`](actions/get_business_profile.md) — Get the business profile configured for a WhatsApp Business phone number.
- [`get_media_info`](actions/get_media_info.md) — Get metadata and a short-lived download URL for uploaded media.
- [`get_message_templates`](actions/get_message_templates.md) — List message templates for a WhatsApp Business Account.
- [`get_phone_number`](actions/get_phone_number.md) — Get metadata for a specific WhatsApp Business phone number.
- [`get_phone_numbers`](actions/get_phone_numbers.md) — List phone numbers for a WhatsApp Business Account.
- [`get_template_status`](actions/get_template_status.md) — Get status details for a specific message template.
- [`send_contacts`](actions/send_contacts.md) — Send one or more contacts to a WhatsApp user.
- [`send_interactive_buttons`](actions/send_interactive_buttons.md) — Send an interactive reply-button message.
- [`send_interactive_list`](actions/send_interactive_list.md) — Send an interactive list message with sections and rows.
- [`send_location`](actions/send_location.md) — Send a location message to a WhatsApp user.
- [`send_media`](actions/send_media.md) — Send a media message by public URL.
- [`send_media_by_id`](actions/send_media_by_id.md) — Send previously uploaded media by Meta media ID.
- [`send_message`](actions/send_message.md) — Send a text message to a WhatsApp user.
- [`send_template_message`](actions/send_template_message.md) — Send an approved WhatsApp template message.
- [`upload_media`](actions/upload_media.md) — Upload media to Meta and return the resulting media record.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change WhatsApp state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — WhatsApp is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=whatsapp
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- WhatsApp homepage: https://www.whatsapp.com
