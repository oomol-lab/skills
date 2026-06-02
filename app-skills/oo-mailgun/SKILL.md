---
name: oo-mailgun
description: "Mailgun (mailgun.com). Use this skill for ANY Mailgun request — reading, creating, updating, and deleting data. Whenever a task involves Mailgun, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Mailgun"
  author: "OOMOL"
  version: "1.0.0"
  service: "mailgun"
  categories: "Communication, Marketing"
  homepage: "https://www.mailgun.com"
  icon: "https://static.oomol.com/logo/third-party/mailgun.svg"
---

# Mailgun

Operate **Mailgun** through your OOMOL-connected account. This skill calls the `mailgun` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Marketing. Exposes 17 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Mailgun. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "mailgun" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "mailgun" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_suppression`](actions/add_suppression.md) — Add one Mailgun suppression or allowlist record.
- [`create_template`](actions/create_template.md) — Create a Mailgun template and optionally its initial active version.
- [`create_template_version`](actions/create_template_version.md) — Create a new version for a Mailgun template.
- [`delete_suppression`](actions/delete_suppression.md) — Remove one Mailgun suppression or allowlist record.
- [`get_domain`](actions/get_domain.md) — Get Mailgun domain details including DNS records and sending state.
- [`get_domain_tracking_settings`](actions/get_domain_tracking_settings.md) — Get open, click, unsubscribe, and web scheme tracking settings for a domain.
- [`get_suppression`](actions/get_suppression.md) — Get one Mailgun suppression or allowlist record.
- [`get_template`](actions/get_template.md) — Get metadata for one Mailgun template and optionally its active version.
- [`get_template_version`](actions/get_template_version.md) — Get content and metadata for one Mailgun template version.
- [`list_domains`](actions/list_domains.md) — List Mailgun domains available to the current API key.
- [`list_events`](actions/list_events.md) — List delivery, engagement, and failure events for a Mailgun domain.
- [`list_suppressions`](actions/list_suppressions.md) — List records from a Mailgun suppression or allowlist table.
- [`list_template_versions`](actions/list_template_versions.md) — List versions for a Mailgun template.
- [`list_templates`](actions/list_templates.md) — List templates stored for a Mailgun domain.
- [`send_email`](actions/send_email.md) — Send an email through Mailgun using a stored domain.
- [`update_domain_tracking_settings`](actions/update_domain_tracking_settings.md) — Update open, click, or unsubscribe tracking settings for a Mailgun domain.
- [`verify_domain`](actions/verify_domain.md) — Ask Mailgun to verify DNS records for a sending domain.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Mailgun state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Mailgun is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=mailgun
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Mailgun homepage: https://www.mailgun.com
