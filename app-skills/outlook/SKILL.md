---
name: outlook
description: "Outlook (microsoft.com). Use this skill for ANY Outlook request — reading, creating, and updating data. Whenever a task involves Outlook, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Outlook"
  author: "OOMOL"
  version: "1.0.0"
  service: "outlook"
  categories: "Communication, Productivity"
  homepage: "https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
  icon: "https://static.oomol.com/logo/third-party/Outlook.webp"
---

# Outlook

Operate **Outlook** through your OOMOL-connected account. This skill calls the `outlook` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Outlook. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "outlook" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "outlook" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_draft`](actions/create_draft.md) — Create a new Outlook draft message with subject, body, recipients, and other writable message properties.
- [`get_mailbox_settings`](actions/get_mailbox_settings.md) — Get the current Outlook mailbox settings, including automatic replies, locale, time zone, and working hours.
- [`get_message`](actions/get_message.md) — Get a single Outlook message by message ID, including message metadata and optional body formatting.
- [`get_profile`](actions/get_profile.md) — Get the current Outlook account profile from Microsoft Graph so you can identify the connected mailbox.
- [`list_mail_folders`](actions/list_mail_folders.md) — List the root-level Outlook mail folders for the connected mailbox, with optional hidden folders and field selection.
- [`list_messages`](actions/list_messages.md) — List Outlook messages from the mailbox or from a specific mail folder, with support for OData filters, sorting, field selection, and pagination.
- [`reply_email`](actions/reply_email.md) — Reply to an existing Outlook message with either a comment or a replacement body, and optionally add more recipients to the reply.
- [`send_draft`](actions/send_draft.md) — Send an existing Outlook draft message by message ID.
- [`send_email`](actions/send_email.md) — Send a new Outlook email in a single operation, without creating a standalone draft first.
- [`update_draft`](actions/update_draft.md) — Update an existing Outlook draft message. Use this to revise the subject, body, recipients, or other draft-only properties before sending.
- [`update_mailbox_settings`](actions/update_mailbox_settings.md) — Update Outlook mailbox settings such as automatic replies, locale, time zone, working hours, and date or time formatting.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Outlook state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Outlook is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=outlook
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Outlook homepage: https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook
