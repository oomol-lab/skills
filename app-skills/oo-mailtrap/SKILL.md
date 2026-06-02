---
name: oo-mailtrap
description: "Mailtrap (mailtrap.io). Use this skill for ANY Mailtrap request — reading, creating, updating, and deleting data. Whenever a task involves Mailtrap, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Mailtrap"
  author: "OOMOL"
  version: "1.0.0"
  service: "mailtrap"
  categories: "Communication, Developer Tools"
  homepage: "https://mailtrap.io/"
  icon: "https://static.oomol.com/logo/third-party/Mailtrap.svg"
---

# Mailtrap

Operate **Mailtrap** through your OOMOL-connected account. This skill calls the `mailtrap` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Developer Tools. Exposes 50 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Mailtrap. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "mailtrap" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "mailtrap" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`clean_inbox`](actions/clean_inbox.md) — Delete all messages from one Mailtrap inbox.
- [`create_contact`](actions/create_contact.md) — Create one Mailtrap contact.
- [`create_contact_event`](actions/create_contact_event.md) — Create one custom Mailtrap contact event.
- [`create_contact_export`](actions/create_contact_export.md) — Create one Mailtrap contact export job.
- [`create_contact_field`](actions/create_contact_field.md) — Create one Mailtrap contact field.
- [`create_contact_list`](actions/create_contact_list.md) — Create one Mailtrap contact list.
- [`create_email_template`](actions/create_email_template.md) — Create one Mailtrap email template.
- [`create_sending_domain`](actions/create_sending_domain.md) — Create one Mailtrap sending domain.
- [`delete_contact`](actions/delete_contact.md) — Delete one Mailtrap contact by UUID or email.
- [`delete_contact_field`](actions/delete_contact_field.md) — Delete one Mailtrap contact field.
- [`delete_contact_list`](actions/delete_contact_list.md) — Delete one Mailtrap contact list.
- [`delete_email_template`](actions/delete_email_template.md) — Delete one Mailtrap email template.
- [`delete_project`](actions/delete_project.md) — Delete one Mailtrap project.
- [`delete_sending_domain`](actions/delete_sending_domain.md) — Delete one Mailtrap sending domain.
- [`get_billing_usage`](actions/get_billing_usage.md) — Get current Mailtrap billing cycle usage.
- [`get_contact`](actions/get_contact.md) — Get one Mailtrap contact by UUID or email.
- [`get_contact_export`](actions/get_contact_export.md) — Get one Mailtrap contact export job by ID.
- [`get_contact_field`](actions/get_contact_field.md) — Get one Mailtrap contact field by ID.
- [`get_contact_import`](actions/get_contact_import.md) — Get one Mailtrap contact import job by ID.
- [`get_contact_list`](actions/get_contact_list.md) — Get one Mailtrap contact list by ID.
- [`get_email_template`](actions/get_email_template.md) — Get one Mailtrap email template by ID.
- [`get_inbox`](actions/get_inbox.md) — Get one Mailtrap inbox by ID.
- [`get_message`](actions/get_message.md) — Get one Mailtrap inbox message by ID.
- [`get_message_html_source`](actions/get_message_html_source.md) — Get the raw HTML source of one Mailtrap inbox message.
- [`get_permission_resources`](actions/get_permission_resources.md) — Get Mailtrap permission resources accessible to the token.
- [`get_project`](actions/get_project.md) — Get one Mailtrap project by ID.
- [`get_sending_domain`](actions/get_sending_domain.md) — Get one Mailtrap sending domain by ID.
- [`get_sending_stats`](actions/get_sending_stats.md) — Get Mailtrap sending stats for one account.
- [`get_sending_stats_by_categories`](actions/get_sending_stats_by_categories.md) — Get Mailtrap sending stats grouped by category.
- [`get_sending_stats_by_date`](actions/get_sending_stats_by_date.md) — Get Mailtrap sending stats grouped by date.
- [`get_sending_stats_by_domains`](actions/get_sending_stats_by_domains.md) — Get Mailtrap sending stats grouped by sending domain.
- [`get_sending_stats_by_esp`](actions/get_sending_stats_by_esp.md) — Get Mailtrap sending stats grouped by email service provider.
- [`import_contacts`](actions/import_contacts.md) — Create one Mailtrap contact import job.
- [`list_accounts`](actions/list_accounts.md) — List Mailtrap accounts accessible with the current API token.
- [`list_contact_fields`](actions/list_contact_fields.md) — List Mailtrap contact fields.
- [`list_contact_lists`](actions/list_contact_lists.md) — List Mailtrap contact lists.
- [`list_email_templates`](actions/list_email_templates.md) — List Mailtrap email templates.
- [`list_inboxes`](actions/list_inboxes.md) — List Mailtrap inboxes under one account.
- [`list_messages`](actions/list_messages.md) — List messages captured in one Mailtrap inbox.
- [`list_projects`](actions/list_projects.md) — List Mailtrap projects under one account.
- [`list_sending_domains`](actions/list_sending_domains.md) — List Mailtrap sending domains.
- [`list_suppressions`](actions/list_suppressions.md) — List Mailtrap suppressions.
- [`mark_inbox_as_read`](actions/mark_inbox_as_read.md) — Mark all messages in one Mailtrap inbox as read.
- [`reset_inbox_credentials`](actions/reset_inbox_credentials.md) — Reset SMTP credentials for one Mailtrap inbox.
- [`update_contact`](actions/update_contact.md) — Update one Mailtrap contact by UUID or email.
- [`update_contact_field`](actions/update_contact_field.md) — Update one Mailtrap contact field.
- [`update_contact_list`](actions/update_contact_list.md) — Update one Mailtrap contact list.
- [`update_email_template`](actions/update_email_template.md) — Update one Mailtrap email template.
- [`update_inbox`](actions/update_inbox.md) — Update one Mailtrap inbox.
- [`update_project`](actions/update_project.md) — Update one Mailtrap project.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Mailtrap state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Mailtrap is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=mailtrap
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Mailtrap homepage: https://mailtrap.io/
