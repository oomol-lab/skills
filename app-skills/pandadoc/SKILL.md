---
name: pandadoc
description: "PandaDoc (pandadoc.com). Use this skill for ANY PandaDoc request — reading, creating, updating, and deleting data. Whenever a task involves PandaDoc, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "PandaDoc"
  author: "OOMOL"
  version: "1.0.0"
  service: "pandadoc"
  categories: "Productivity, Communication"
  homepage: "https://www.pandadoc.com"
  icon: "https://static.oomol.com/logo/third-party/PandaDoc.svg"
---

# PandaDoc

Operate **PandaDoc** through your OOMOL-connected account. This skill calls the `pandadoc` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 13 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected PandaDoc. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "pandadoc" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "pandadoc" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_document_attachment`](actions/create_document_attachment.md) — Upload an attachment file to a draft PandaDoc document.
- [`create_document_from_file`](actions/create_document_from_file.md) — Create a PandaDoc document from a public file URL, a transit file reference, or a local file upload.
- [`create_folder`](actions/create_folder.md) — Create a new document folder in PandaDoc.
- [`create_or_update_contact`](actions/create_or_update_contact.md) — Create a PandaDoc contact, or update the existing contact that matches the provided email address.
- [`create_template`](actions/create_template.md) — Create a PandaDoc template from structured content or from a local PDF upload.
- [`create_webhook`](actions/create_webhook.md) — Create a PandaDoc webhook subscription for document lifecycle events.
- [`delete_contact`](actions/delete_contact.md) — Delete a contact from the connected PandaDoc workspace.
- [`delete_template`](actions/delete_template.md) — Delete a template from the connected PandaDoc workspace.
- [`get_document_details`](actions/get_document_details.md) — Retrieve detailed metadata for a specific PandaDoc document.
- [`get_template_details`](actions/get_template_details.md) — Retrieve detailed metadata for a specific PandaDoc template.
- [`list_contacts`](actions/list_contacts.md) — List contacts in the connected PandaDoc workspace, with optional exact email filtering.
- [`list_document_folders`](actions/list_document_folders.md) — List document folders in the connected PandaDoc workspace.
- [`list_templates`](actions/list_templates.md) — List templates available in the connected PandaDoc workspace.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change PandaDoc state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — PandaDoc is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=pandadoc
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- PandaDoc homepage: https://www.pandadoc.com
