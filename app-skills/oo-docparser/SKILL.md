---
name: oo-docparser
description: "Docparser (docparser.com). Use this skill for ANY Docparser request — reading, creating, and updating data. Whenever a task involves Docparser, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Docparser"
  author: "OOMOL"
  version: "1.0.0"
  service: "docparser"
  categories: "Productivity, Data & Analytics"
  homepage: "https://docparser.com"
  icon: "https://static.oomol.com/logo/third-party/Docparser.svg"
---

# Docparser

Operate **Docparser** through your OOMOL-connected account. This skill calls the `docparser` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Docparser. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "docparser" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "docparser" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`fetch_document_from_url`](actions/fetch_document_from_url.md) — Queue a publicly accessible document URL for import into a Docparser parser and return the scheduled document metadata.
- [`get_document_result`](actions/get_document_result.md) — Retrieve the parsed data of one Docparser document. When child documents exist and are included, multiple result rows may be returned.
- [`get_document_status`](actions/get_document_status.md) — Retrieve the import, preprocessing, parsing, and webhook-dispatch status of one Docparser document.
- [`get_multiple_document_results`](actions/get_multiple_document_results.md) — Retrieve parsed data for multiple documents of a specific parser with optional filtering, pagination, queue inclusion, and sorting.
- [`get_parser_models`](actions/get_parser_models.md) — List all model layouts for a specific Docparser parser.
- [`list_parsers`](actions/list_parsers.md) — List all Document Parsers linked to the current Docparser account.
- [`ping`](actions/ping.md) — Ping the Docparser API to verify that the provided API key is valid.
- [`reintegrate_documents`](actions/reintegrate_documents.md) — Schedule one or more Docparser documents for the integration queue using their document IDs.
- [`reparse_documents`](actions/reparse_documents.md) — Schedule one or more Docparser documents for re-parsing using their document IDs.
- [`upload_document_by_content`](actions/upload_document_by_content.md) — Upload a document to a Docparser parser by sending base64-encoded file content and an optional file name.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Docparser state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Docparser is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=docparser
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Docparser homepage: https://docparser.com
