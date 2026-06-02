---
name: oo-databricks
description: "Databricks (databricks.com). Use this skill for ANY Databricks request — reading, creating, updating, and deleting data. Whenever a task involves Databricks, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Databricks"
  author: "OOMOL"
  version: "1.0.0"
  service: "databricks"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://www.databricks.com"
  icon: "https://static.oomol.com/logo/third-party/Databricks.svg"
---

# Databricks

Operate **Databricks** through your OOMOL-connected account. This skill calls the `databricks` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 36 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Databricks. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "databricks" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "databricks" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_run`](actions/cancel_run.md) — Cancel a Databricks job run by run ID.
- [`create_cluster`](actions/create_cluster.md) — Create a Databricks cluster from a raw official clusters create payload and return the new cluster ID.
- [`create_job`](actions/create_job.md) — Create a Databricks job from a raw official Jobs API settings object and return the new job ID.
- [`create_repo`](actions/create_repo.md) — Create a Databricks workspace repo that links a Git remote into the connected workspace.
- [`create_secret_scope`](actions/create_secret_scope.md) — Create a Databricks secret scope with an optional backend configuration and initial manager principal.
- [`delete_job`](actions/delete_job.md) — Delete a Databricks job by ID.
- [`delete_repo`](actions/delete_repo.md) — Delete a Databricks workspace repo by repo ID.
- [`delete_secret`](actions/delete_secret.md) — Delete one Databricks secret value from a Databricks secret scope.
- [`delete_secret_scope`](actions/delete_secret_scope.md) — Delete a Databricks secret scope by scope name.
- [`edit_cluster`](actions/edit_cluster.md) — Edit an existing Databricks cluster by cluster ID using a raw official clusters edit payload.
- [`get_cluster`](actions/get_cluster.md) — Get one Databricks cluster by cluster ID.
- [`get_current_user`](actions/get_current_user.md) — Get the current Databricks workspace principal profile for the connected personal access token.
- [`get_job`](actions/get_job.md) — Get one Databricks job, including its current settings and optional continuation page token.
- [`get_run_by_id`](actions/get_run_by_id.md) — Get one Databricks job run by run ID.
- [`get_run_output`](actions/get_run_output.md) — Get the output payload for one Databricks run, including notebook output or error details when available.
- [`list_cluster_node_types`](actions/list_cluster_node_types.md) — List Databricks cluster node types that are available in the connected workspace region.
- [`list_cluster_spark_versions`](actions/list_cluster_spark_versions.md) — List Databricks Runtime and Spark versions that can be used when creating or editing clusters.
- [`list_cluster_zones`](actions/list_cluster_zones.md) — List Databricks cluster availability zones for the connected workspace when the API is supported.
- [`list_clusters`](actions/list_clusters.md) — List Databricks clusters with optional paging, filtering, and sorting controls from the official clusters API.
- [`list_jobs`](actions/list_jobs.md) — List Databricks jobs in the connected workspace with optional pagination, name filtering, and task expansion.
- [`list_runs`](actions/list_runs.md) — List Databricks job runs with optional job, state, time-range, and pagination filters.
- [`list_secret_scopes`](actions/list_secret_scopes.md) — List Databricks secret scopes in the connected workspace.
- [`list_secrets`](actions/list_secrets.md) — List Databricks secret metadata rows in one secret scope.
- [`permanent_delete_cluster`](actions/permanent_delete_cluster.md) — Permanently delete a Databricks cluster by cluster ID.
- [`put_secret`](actions/put_secret.md) — Create or overwrite a Databricks secret value inside one Databricks secret scope.
- [`run_now_job`](actions/run_now_job.md) — Trigger an immediate run for a Databricks job with optional parameter maps and idempotency token.
- [`start_cluster`](actions/start_cluster.md) — Start a terminated Databricks cluster by cluster ID.
- [`submit_run`](actions/submit_run.md) — Submit a one-time Databricks run from a raw official Jobs API submit payload and return the run ID.
- [`update_job_by_id`](actions/update_job_by_id.md) — Update an existing Databricks job by ID using the official partial-update payload fields.
- [`update_repo`](actions/update_repo.md) — Update a Databricks workspace repo by switching branch or tag, or by changing sparse-checkout settings.
- [`workspace_delete`](actions/workspace_delete.md) — Delete a Databricks workspace object or directory by absolute path.
- [`workspace_export`](actions/workspace_export.md) — Export one Databricks workspace object as base64 content or direct text content, depending on the export mode.
- [`workspace_get_status`](actions/workspace_get_status.md) — Get metadata for one Databricks workspace object by absolute path.
- [`workspace_import`](actions/workspace_import.md) — Import base64 content into the Databricks workspace at an absolute path.
- [`workspace_list`](actions/workspace_list.md) — List the direct Databricks workspace objects under a workspace path.
- [`workspace_mkdirs`](actions/workspace_mkdirs.md) — Create a Databricks workspace directory, including any missing parent directories.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Databricks state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Databricks is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=databricks
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Databricks homepage: https://www.databricks.com
