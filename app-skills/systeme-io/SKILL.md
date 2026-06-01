---
name: systeme-io
description: "Systeme.io (systeme.io). Use this skill for ANY Systeme.io request — reading, creating, updating, and deleting data. Whenever a task involves Systeme.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Systeme.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "systeme_io"
  categories: "Marketing, Productivity"
  homepage: "https://systeme.io"
  icon: "https://static.oomol.com/logo/third-party/systeme_io.svg"
---

# Systeme.io

Operate **Systeme.io** through your OOMOL-connected account. This skill calls the `systeme_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Productivity. Exposes 24 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Systeme.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "systeme_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "systeme_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`attach_contact_tag`](actions/attach_contact_tag.md) — Attach a tag to a contact in Systeme.io.
- [`cancel_subscription`](actions/cancel_subscription.md) — Cancel a subscription in Systeme.io.
- [`create_contact`](actions/create_contact.md) — Create a new contact in Systeme.io.
- [`create_enrollment`](actions/create_enrollment.md) — Enroll a contact in a course in Systeme.io.
- [`create_tag`](actions/create_tag.md) — Create a new tag in Systeme.io.
- [`create_webhook`](actions/create_webhook.md) — Create a new webhook in Systeme.io.
- [`delete_contact`](actions/delete_contact.md) — Delete a contact from Systeme.io.
- [`delete_enrollment`](actions/delete_enrollment.md) — Remove a contact enrollment from a course in Systeme.io.
- [`delete_tag`](actions/delete_tag.md) — Delete a tag from Systeme.io.
- [`delete_webhook`](actions/delete_webhook.md) — Delete a webhook from Systeme.io.
- [`detach_contact_tag`](actions/detach_contact_tag.md) — Detach a tag from a contact in Systeme.io.
- [`get_contact`](actions/get_contact.md) — Get a single contact from Systeme.io by ID.
- [`get_tag`](actions/get_tag.md) — Get a single tag from Systeme.io by ID.
- [`get_webhook`](actions/get_webhook.md) — Get a single webhook from Systeme.io by ID.
- [`list_contact_fields`](actions/list_contact_fields.md) — List custom contact fields from Systeme.io.
- [`list_contacts`](actions/list_contacts.md) — List contacts from Systeme.io with optional pagination.
- [`list_courses`](actions/list_courses.md) — List courses from Systeme.io with optional pagination.
- [`list_enrollments`](actions/list_enrollments.md) — List enrollments for a specific course in Systeme.io.
- [`list_subscriptions`](actions/list_subscriptions.md) — List subscriptions from Systeme.io with optional pagination.
- [`list_tags`](actions/list_tags.md) — List tags from Systeme.io with optional pagination.
- [`list_webhooks`](actions/list_webhooks.md) — List webhooks from Systeme.io with optional pagination.
- [`update_contact`](actions/update_contact.md) — Update an existing contact in Systeme.io.
- [`update_tag`](actions/update_tag.md) — Update an existing tag in Systeme.io.
- [`update_webhook`](actions/update_webhook.md) — Update an existing webhook in Systeme.io.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Systeme.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Systeme.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=systeme_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Systeme.io homepage: https://systeme.io
