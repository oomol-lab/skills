---
name: oo-agenty
description: "Agenty (agenty.com). Use this skill for ANY Agenty request — reading, creating, updating, and deleting data. Whenever a task involves Agenty, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Agenty"
  author: "OOMOL"
  version: "1.0.0"
  service: "agenty"
  categories: "Developer Tools, Data & Analytics"
  homepage: "https://agenty.com"
  icon: "https://static.oomol.com/logo/third-party/Agenty.svg"
---

# Agenty

Operate **Agenty** through your OOMOL-connected account. This skill calls the `agenty` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics. Exposes 31 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Agenty. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "agenty" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "agenty" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_list_rows`](actions/add_list_rows.md) — Insert one or more rows into one Agenty list.
- [`capture_screenshot`](actions/capture_screenshot.md) — Capture a screenshot for one web page and return a downloadable file.
- [`clear_list_rows`](actions/clear_list_rows.md) — Delete all rows from one Agenty list.
- [`convert_url_to_pdf`](actions/convert_url_to_pdf.md) — Convert one web page into a PDF document and return a downloadable file.
- [`copy_agent`](actions/copy_agent.md) — Clone one Agenty agent by agent identifier.
- [`create_agent`](actions/create_agent.md) — Create one Agenty agent with the provided configuration.
- [`create_list`](actions/create_list.md) — Create one Agenty list.
- [`delete_agent`](actions/delete_agent.md) — Delete one Agenty agent by agent identifier.
- [`delete_list_row`](actions/delete_list_row.md) — Delete one Agenty list row by list and row identifiers.
- [`delete_list_rows`](actions/delete_list_rows.md) — Delete multiple Agenty list rows by list identifier and row identifiers.
- [`download_job_file`](actions/download_job_file.md) — Download one named Agenty job file and return a downloadable file.
- [`download_job_result`](actions/download_job_result.md) — Download one Agenty job export as raw text content.
- [`download_list_rows`](actions/download_list_rows.md) — Download all rows from one Agenty list as raw text content.
- [`extract_structured_data`](actions/extract_structured_data.md) — Extract structured metadata such as JSON-LD, RDFa, microdata, and meta tags.
- [`get_agent`](actions/get_agent.md) — Get one Agenty agent by agent identifier.
- [`get_agent_inputs`](actions/get_agent_inputs.md) — Get the current Agenty input configuration for one agent.
- [`get_agent_templates`](actions/get_agent_templates.md) — List public Agenty agent templates with optional pagination and sorting parameters.
- [`get_job`](actions/get_job.md) — Get one Agenty job by job identifier.
- [`get_job_logs`](actions/get_job_logs.md) — Get raw log content for one Agenty job.
- [`get_job_result`](actions/get_job_result.md) — Get paginated result rows for one Agenty job.
- [`get_list`](actions/get_list.md) — Get one Agenty list by list identifier.
- [`get_list_row`](actions/get_list_row.md) — Get one Agenty list row by list and row identifiers.
- [`get_page_content`](actions/get_page_content.md) — Fetch the rendered HTML content for one web page.
- [`get_redirects`](actions/get_redirects.md) — Return the ordered redirect chain for one URL.
- [`list_agents`](actions/list_agents.md) — List Agenty agents with optional pagination and sorting parameters.
- [`list_job_files`](actions/list_job_files.md) — List the files generated for one Agenty job.
- [`list_jobs`](actions/list_jobs.md) — List Agenty jobs with optional pagination, sorting, and agent filtering parameters.
- [`start_job`](actions/start_job.md) — Start one Agenty job for an existing agent.
- [`stop_job`](actions/stop_job.md) — Stop one running Agenty job by job identifier.
- [`update_agent`](actions/update_agent.md) — Update one Agenty agent by agent identifier.
- [`update_agent_inputs`](actions/update_agent_inputs.md) — Update the Agenty input configuration for one agent.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Agenty state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Agenty is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=agenty
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Agenty homepage: https://agenty.com
