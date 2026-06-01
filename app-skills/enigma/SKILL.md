---
name: enigma
description: "Enigma (enigma.com). Use this skill for ANY Enigma request — reading, creating, updating, and deleting data. Whenever a task involves Enigma, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Enigma"
  author: "OOMOL"
  version: "1.0.0"
  service: "enigma"
  categories: "Data & Analytics"
  homepage: "https://www.enigma.com"
  icon: "https://static.oomol.com/logo/third-party/Enigma.svg"
---

# Enigma

Operate **Enigma** through your OOMOL-connected account. This skill calls the `enigma` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Enigma. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "enigma" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "enigma" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_list`](actions/create_list.md) — Create a user-managed Enigma list from a search definition or input file, with optional aliases, column ordering, and column mapping.
- [`create_suggestion`](actions/create_suggestion.md) — Submit a suggestion to Enigma for data correction or enrichment feedback using the official GraphQL suggestion mutation.
- [`delete_list`](actions/delete_list.md) — Delete a user-managed Enigma list by ID.
- [`get_account`](actions/get_account.md) — Retrieve the current Enigma account metadata available to the connected API key, including customer, billing, and auto-recharge details.
- [`get_aggregate_counts`](actions/get_aggregate_counts.md) — Run the official Enigma GraphQL `aggregate` query to count matching entities or related entities for a search request.
- [`get_background_task`](actions/get_background_task.md) — Retrieve the latest status for an Enigma background task created by an asynchronous GraphQL search or export workflow.
- [`get_business`](actions/get_business.md) — Retrieve a single Enigma entity by GraphQL entity ID and entity type, returning a normalized summary plus the raw enriched entity payload.
- [`get_graphql_schema_extended`](actions/get_graphql_schema_extended.md) — Retrieve Enigma's extended GraphQL schema metadata, including types, projections, and data-asset descriptors.
- [`get_list_materialization`](actions/get_list_materialization.md) — Retrieve an Enigma list materialization by ID, including progress, generated resource URI, metrics, and billing details.
- [`search_graphql`](actions/search_graphql.md) — Search Enigma entities through the official GraphQL `search` query, supporting direct lookups, structured filters, natural-language prompts, and asynchronous output generation.
- [`search_lists`](actions/search_lists.md) — Query user-created Enigma lists with optional name or ID filters and Relay-style pagination controls.
- [`verify_business_v2`](actions/verify_business_v2.md) — Verify a business with Enigma's KYB v2 API, returning a normalized risk summary and the raw verification payload.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Enigma state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Enigma is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=enigma
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Enigma homepage: https://www.enigma.com
