---
name: oo-pinecone
description: "Pinecone (pinecone.io). Use this skill for ANY Pinecone request — reading, creating, updating, and deleting data. Whenever a task involves Pinecone, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Pinecone"
  author: "OOMOL"
  version: "1.0.0"
  service: "pinecone"
  categories: "AI, Data & Analytics"
  homepage: "https://www.pinecone.io/"
---

# Pinecone

Operate **Pinecone** through your OOMOL-connected account. This skill calls the `pinecone` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Data & Analytics. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Pinecone. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "pinecone" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "pinecone" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`configure_index`](actions/configure_index.md) — Configure an existing Pinecone index.
- [`create_index`](actions/create_index.md) — Create a Pinecone serverless index.
- [`delete_index`](actions/delete_index.md) — Delete one Pinecone index by name.
- [`delete_vectors`](actions/delete_vectors.md) — Delete vectors from a Pinecone index namespace by IDs, filter, or deleteAll.
- [`describe_index`](actions/describe_index.md) — Describe one Pinecone index by name.
- [`fetch_vectors`](actions/fetch_vectors.md) — Fetch Pinecone vectors by ID from one namespace.
- [`get_index_stats`](actions/get_index_stats.md) — Get statistics for a Pinecone index.
- [`list_indexes`](actions/list_indexes.md) — List Pinecone indexes in the authenticated project.
- [`list_vector_ids`](actions/list_vector_ids.md) — List vector IDs in a Pinecone serverless index namespace.
- [`query_vectors`](actions/query_vectors.md) — Search a Pinecone index namespace with a query vector.
- [`update_vector`](actions/update_vector.md) — Update one Pinecone vector or metadata-matched records in a namespace.
- [`upsert_vectors`](actions/upsert_vectors.md) — Upsert dense or sparse vectors into a Pinecone index namespace.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Pinecone state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Pinecone is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=pinecone
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Pinecone homepage: https://www.pinecone.io/
