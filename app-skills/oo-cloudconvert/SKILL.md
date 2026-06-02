---
name: oo-cloudconvert
description: "CloudConvert (cloudconvert.com). Use this skill for ANY CloudConvert request — reading, creating, updating, and deleting data. Whenever a task involves CloudConvert, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "CloudConvert"
  author: "OOMOL"
  version: "1.0.0"
  service: "cloudconvert"
  categories: "Productivity, Design & Media"
  homepage: "https://cloudconvert.com"
  icon: "https://static.oomol.com/logo/third-party/CloudConvert.svg"
---

# CloudConvert

Operate **CloudConvert** through your OOMOL-connected account. This skill calls the `cloudconvert` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Design & Media. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected CloudConvert. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "cloudconvert" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "cloudconvert" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cancel_task`](actions/cancel_task.md) — Cancel a CloudConvert task that is still waiting or processing.
- [`create_url_conversion_job`](actions/create_url_conversion_job.md) — Create a CloudConvert job that imports a remote file URL, converts it, and exports the result via `export/url`.
- [`create_url_conversion_job_and_wait`](actions/create_url_conversion_job_and_wait.md) — Create a URL-based CloudConvert conversion job and wait synchronously until the job finishes.
- [`delete_job`](actions/delete_job.md) — Delete a CloudConvert job, including all tasks and related data.
- [`delete_task`](actions/delete_task.md) — Delete a CloudConvert task, including all related data.
- [`get_current_user`](actions/get_current_user.md) — Get the current CloudConvert user and remaining credits for the API token.
- [`get_job`](actions/get_job.md) — Get a single CloudConvert job and include its tasks.
- [`get_task`](actions/get_task.md) — Get a single CloudConvert task by ID.
- [`list_conversion_types`](actions/list_conversion_types.md) — List possible CloudConvert conversion types for the requested input and output formats.
- [`list_jobs`](actions/list_jobs.md) — List CloudConvert jobs for the current account.
- [`list_tasks`](actions/list_tasks.md) — List CloudConvert tasks for the current account.
- [`retry_task`](actions/retry_task.md) — Retry a CloudConvert task by creating a new task from the original payload.
- [`wait_for_job`](actions/wait_for_job.md) — Wait synchronously for a CloudConvert job to finish and return the finished or failed job with tasks.
- [`wait_for_task`](actions/wait_for_task.md) — Wait synchronously for a CloudConvert task to finish and return the finished or failed task.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change CloudConvert state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — CloudConvert is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=cloudconvert
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- CloudConvert homepage: https://cloudconvert.com
