---
name: ragie
description: "Ragie (ragie.ai). Use this skill for ANY Ragie request — reading, creating, updating, and deleting data. Whenever a task involves Ragie, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Ragie"
  author: "OOMOL"
  version: "1.0.0"
  service: "ragie"
  categories: "AI, Developer Tools"
  homepage: "https://www.ragie.ai"
  icon: "https://static.oomol.com/logo/third-party/Ragie.svg"
---

# Ragie

Operate **Ragie** through your OOMOL-connected account. This skill calls the `ragie` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 19 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Ragie. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ragie" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ragie" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_document_from_url`](actions/create_document_from_url.md) — Create a Ragie document from a public URL when the source file is already hosted externally.
- [`create_document_raw`](actions/create_document_raw.md) — Create a Ragie document from raw text or JSON data when the content already exists in memory and does not need file upload.
- [`create_oauth_redirect_url`](actions/create_oauth_redirect_url.md) — Create the Ragie embedded OAuth redirect URL for a connection source type such as Google Drive or Notion.
- [`create_partition`](actions/create_partition.md) — Create a Ragie partition to isolate documents, metadata schemas, and resource limits by workspace or tenant.
- [`delete_document`](actions/delete_document.md) — Delete a Ragie document, optionally in asynchronous mode.
- [`delete_partition`](actions/delete_partition.md) — Delete a Ragie partition, optionally in asynchronous mode.
- [`get_document`](actions/get_document.md) — Get a single Ragie document by ID to inspect status, metadata, errors, and counts.
- [`get_document_chunks`](actions/get_document_chunks.md) — List the chunks of a Ragie document with cursor pagination and optional start/end index filtering.
- [`get_document_content`](actions/get_document_content.md) — Get Ragie document content in the requested media type, with optional byte range and download behavior.
- [`get_document_summary`](actions/get_document_summary.md) — Get the Ragie-generated summary for a specific document.
- [`get_partition`](actions/get_partition.md) — Get a specific Ragie partition together with its limits and usage stats.
- [`list_connection_source_types`](actions/list_connection_source_types.md) — List the embedded connector source types that Ragie can authorize and sync through its connections API.
- [`list_connections`](actions/list_connections.md) — List Ragie connections with metadata filtering, pagination, and optional partition scoping.
- [`list_documents`](actions/list_documents.md) — List Ragie documents with filter, cursor pagination, and optional partition scoping to inspect ingestion progress.
- [`list_partitions`](actions/list_partitions.md) — List available Ragie partitions and their current limits with cursor pagination.
- [`patch_document_metadata`](actions/patch_document_metadata.md) — Patch Ragie document metadata in place without replacing the entire metadata object.
- [`retrieve`](actions/retrieve.md) — Retrieve the most relevant Ragie document chunks for a query, with optional metadata filters, reranking, and partition scoping.
- [`set_partition_limits`](actions/set_partition_limits.md) — Update the page, media, audio, and video limits on an existing Ragie partition.
- [`update_partition`](actions/update_partition.md) — Update a Ragie partition's description, metadata schema, and context-aware setting without recreating it.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Ragie state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Ragie is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ragie
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Ragie homepage: https://www.ragie.ai
