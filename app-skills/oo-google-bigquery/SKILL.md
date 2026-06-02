---
name: oo-google-bigquery
description: "Google BigQuery (cloud.google.com). Use this skill for ANY Google BigQuery request — reading, creating, updating, and deleting data. Whenever a task involves Google BigQuery, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google BigQuery"
  author: "OOMOL"
  version: "1.0.0"
  service: "google_bigquery"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://cloud.google.com/bigquery"
  icon: "https://static.oomol.com/logo/third-party/google_bigquery.png"
---

# Google BigQuery

Operate **Google BigQuery** through your OOMOL-connected account. This skill calls the `google_bigquery` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 32 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google BigQuery. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "google_bigquery" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "google_bigquery" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_job`](actions/cancel_job.md) — Cancel a BigQuery job.
- [`create_dataset`](actions/create_dataset.md) — Create a BigQuery dataset.
- [`create_routine`](actions/create_routine.md) — Create a BigQuery routine such as a user-defined function or stored procedure.
- [`create_table`](actions/create_table.md) — Create a BigQuery table.
- [`delete_dataset`](actions/delete_dataset.md) — Delete a BigQuery dataset, optionally deleting contained tables when explicitly requested.
- [`delete_model`](actions/delete_model.md) — Delete a BigQuery ML model from a dataset.
- [`delete_routine`](actions/delete_routine.md) — Delete a BigQuery routine from a dataset.
- [`delete_table`](actions/delete_table.md) — Delete a BigQuery table from a dataset.
- [`get_dataset`](actions/get_dataset.md) — Retrieve BigQuery dataset metadata.
- [`get_job`](actions/get_job.md) — Retrieve BigQuery job metadata.
- [`get_model`](actions/get_model.md) — Retrieve BigQuery ML model metadata.
- [`get_query_results`](actions/get_query_results.md) — Poll a BigQuery query job and return a page of results.
- [`get_routine`](actions/get_routine.md) — Retrieve BigQuery routine metadata.
- [`get_table`](actions/get_table.md) — Retrieve BigQuery table metadata, including schema when available.
- [`insert_all`](actions/insert_all.md) — Insert a small batch of rows into a BigQuery table.
- [`list_datasets`](actions/list_datasets.md) — List BigQuery datasets in a Google Cloud project.
- [`list_jobs`](actions/list_jobs.md) — List BigQuery jobs in a Google Cloud project.
- [`list_models`](actions/list_models.md) — List BigQuery ML models in a dataset.
- [`list_projects`](actions/list_projects.md) — List Google Cloud projects accessible to BigQuery.
- [`list_routines`](actions/list_routines.md) — List BigQuery routines in a dataset.
- [`list_table_data`](actions/list_table_data.md) — List rows from a BigQuery table.
- [`list_tables`](actions/list_tables.md) — List BigQuery tables in a dataset.
- [`patch_dataset`](actions/patch_dataset.md) — Patch BigQuery dataset metadata.
- [`patch_model`](actions/patch_model.md) — Patch BigQuery ML model metadata such as friendly name, description, or labels.
- [`patch_table`](actions/patch_table.md) — Patch BigQuery table metadata.
- [`query`](actions/query.md) — Run a BigQuery SQL query and return the first page of results.
- [`start_extract_job_to_gcs`](actions/start_extract_job_to_gcs.md) — Start an asynchronous BigQuery extract job to Cloud Storage objects.
- [`start_load_job_from_gcs`](actions/start_load_job_from_gcs.md) — Start an asynchronous BigQuery load job from Cloud Storage objects.
- [`start_query_job`](actions/start_query_job.md) — Start an asynchronous BigQuery query job.
- [`update_dataset`](actions/update_dataset.md) — Replace BigQuery dataset metadata with the supplied dataset resource fields.
- [`update_routine`](actions/update_routine.md) — Replace BigQuery routine metadata and definition fields.
- [`update_table`](actions/update_table.md) — Replace BigQuery table metadata with the supplied table resource fields.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google BigQuery state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google BigQuery is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=google_bigquery
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google BigQuery homepage: https://cloud.google.com/bigquery
