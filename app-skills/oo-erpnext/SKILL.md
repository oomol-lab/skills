---
name: oo-erpnext
description: "ERPNext (erpnext.com). Use this skill for ANY ERPNext request — reading, creating, updating, and deleting data. Whenever a task involves ERPNext, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ERPNext"
  author: "OOMOL"
  version: "1.0.0"
  service: "erpnext"
  categories: "Productivity, Finance"
  homepage: "https://erpnext.com"
  icon: "https://static.oomol.com/logo/third-party/Erpnext.svg"
---

# ERPNext

Operate **ERPNext** through your OOMOL-connected account. This skill calls the `erpnext` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Finance. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ERPNext. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "erpnext" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "erpnext" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_document`](actions/create_document.md) — Create one ERPNext document for the specified DocType.
- [`delete_document`](actions/delete_document.md) — Delete one ERPNext document by DocType and name.
- [`get_document`](actions/get_document.md) — Get one ERPNext document by DocType and name.
- [`get_document_count`](actions/get_document_count.md) — Get the count of ERPNext documents that match an optional filter.
- [`get_document_value`](actions/get_document_value.md) — Get one ERPNext field value or a group of field values without loading the full document.
- [`get_logged_user`](actions/get_logged_user.md) — Get the currently authenticated ERPNext user for the configured connection.
- [`list_documents`](actions/list_documents.md) — List ERPNext documents for a DocType with optional field selection, filters, sorting, and pagination.
- [`set_document_value`](actions/set_document_value.md) — Set one field value on an ERPNext document and return the updated document.
- [`update_document`](actions/update_document.md) — Update selected fields on one ERPNext document.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ERPNext state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ERPNext is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=erpnext
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ERPNext homepage: https://erpnext.com
