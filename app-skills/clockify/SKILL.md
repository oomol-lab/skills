---
name: clockify
description: "Clockify (clockify.me). Use this skill for ANY Clockify request — reading, creating, updating, and deleting data. Whenever a task involves Clockify, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Clockify"
  author: "OOMOL"
  version: "1.0.0"
  service: "clockify"
  categories: "Productivity"
  homepage: "https://clockify.me"
  icon: "https://static.oomol.com/logo/third-party/clockify.svg"
---

# Clockify

Operate **Clockify** through your OOMOL-connected account. This skill calls the `clockify` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Clockify. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "clockify" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "clockify" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_project`](actions/create_project.md) — Create a new Clockify project in a workspace.
- [`create_task`](actions/create_task.md) — Create a new Clockify task inside a project.
- [`create_time_entry`](actions/create_time_entry.md) — Create a new Clockify time entry for a user.
- [`delete_project`](actions/delete_project.md) — Delete a Clockify project by ID.
- [`get_current_user`](actions/get_current_user.md) — Get the currently authenticated Clockify user.
- [`get_project`](actions/get_project.md) — Get a single Clockify project by ID.
- [`get_workspace`](actions/get_workspace.md) — Get a single Clockify workspace by ID.
- [`list_projects`](actions/list_projects.md) — List Clockify projects in a workspace.
- [`list_tasks`](actions/list_tasks.md) — List Clockify tasks for a project.
- [`list_time_entries`](actions/list_time_entries.md) — List Clockify time entries for a user in a workspace.
- [`list_workspaces`](actions/list_workspaces.md) — List the Clockify workspaces available to the authenticated user.
- [`update_project`](actions/update_project.md) — Update an existing Clockify project.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Clockify state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Clockify is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=clockify
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Clockify homepage: https://clockify.me
