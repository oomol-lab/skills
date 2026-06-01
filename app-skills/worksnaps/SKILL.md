---
name: worksnaps
description: "Worksnaps (worksnaps.com). Use this skill for ANY Worksnaps request — searching and reading data. Whenever a task involves Worksnaps, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Worksnaps"
  author: "OOMOL"
  version: "1.0.0"
  service: "worksnaps"
  categories: "Productivity"
  homepage: "https://www.worksnaps.com"
  icon: "https://static.oomol.com/logo/third-party/worksnaps.png"
---

# Worksnaps

Operate **Worksnaps** through your OOMOL-connected account. This skill calls the `worksnaps` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Worksnaps. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "worksnaps" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "worksnaps" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_current_user`](actions/get_current_user.md) — Read the current Worksnaps user profile for the connected API token.
- [`get_project`](actions/get_project.md) — Read one Worksnaps project by project ID.
- [`get_project_time_entry`](actions/get_project_time_entry.md) — Read one Worksnaps time entry by project ID and time entry ID.
- [`get_project_time_report`](actions/get_project_time_report.md) — Read a Worksnaps project report for a bounded time window and user set.
- [`get_task`](actions/get_task.md) — Read one Worksnaps task by project ID and task ID.
- [`list_project_task_assignments`](actions/list_project_task_assignments.md) — List task assignments for one Worksnaps project.
- [`list_project_tasks`](actions/list_project_tasks.md) — List tasks that belong to one Worksnaps project.
- [`list_project_time_entries`](actions/list_project_time_entries.md) — List Worksnaps time entries in one project for one or more users.
- [`list_project_user_assignments`](actions/list_project_user_assignments.md) — List user assignments for one Worksnaps project.
- [`list_projects`](actions/list_projects.md) — List Worksnaps projects that the current user is involved in.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Worksnaps state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Worksnaps is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=worksnaps
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Worksnaps homepage: https://www.worksnaps.com
