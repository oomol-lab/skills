---
name: oo-zoho-mail
description: "Zoho Mail (zoho.com). Use this skill for ANY Zoho Mail request — reading, creating, and updating data. Whenever a task involves Zoho Mail, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Zoho Mail"
  author: "OOMOL"
  version: "1.0.0"
  services: ["zoho_mail"]
  icon: "https://static.oomol.com/logo/third-party/zoho_mail.svg"
---

# Zoho Mail

Operate **Zoho Mail** through your OOMOL-connected account. This skill calls the `zoho_mail` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Zoho Mail. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "zoho_mail" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "zoho_mail" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `download_attachment` — Download an email attachment to a temporary file URL. Requires configured file transit; connector limit is 20 MiB.
- `get_message` — Get email metadata such as subject, recipients and received time.
- `get_message_content` — Read the email body, optionally including quoted block content.
- `get_message_headers` — Retrieve email headers, including RFC Message-ID values needed for reply drafts.
- `list_accounts` — List the authenticated user's Zoho Mail accounts and discover account IDs.
- `list_attachments` — Get attachment metadata, optionally including inline images.
- `list_folders` — List folders in a Zoho Mail account.
- `list_messages` — List a page of emails with folder, status, label, thread and sorting filters.
- `move_messages` — Move messages or threads into another folder. [write]
- `reply_message` — Reply to an existing email, optionally scheduling delivery and uploading URL attachments. [write]
- `save_draft` — Save an email as a draft or template, including optional reply-thread headers. [write]
- `search_messages` — Search emails using Zoho Mail search syntax and one-based pagination.
- `send_message` — Send or schedule an email, uploading URL attachments automatically. [write]
- `set_read_state` — Mark messages or threads as read or unread. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Zoho Mail state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Zoho Mail is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/connections/zoho_mail
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- Zoho Mail homepage: https://www.zoho.com/mail/
- API documentation: https://www.zoho.com/mail/help/api/
