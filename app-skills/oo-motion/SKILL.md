---
name: oo-motion
description: "Motion (usemotion.com). Use this skill for ANY Motion request — reading, creating, updating, and deleting data. Whenever a task involves Motion, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Motion"
  author: "OOMOL"
  version: "1.0.1"
  services: ["motion"]
---

# Motion

Operate **Motion** through your OOMOL-connected account. This skill calls the `motion` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Motion. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "motion" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "motion" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `create_project` — Create a Motion project in a workspace. [write]
- `create_task` — Create a Motion task in a workspace. [write]
- `delete_task` — Delete a Motion task by ID. [destructive]
- `get_my_user` — Get the Motion user associated with the current API key.
- `get_project` — Get a Motion project by ID.
- `get_task` — Get a Motion task by ID.
- `list_projects` — List Motion projects for a workspace.
- `list_schedules` — List Motion schedules for a workspace.
- `list_statuses` — List Motion statuses for a workspace.
- `list_tasks` — List Motion tasks with optional workspace, project, assignee, status, and cursor filters.
- `list_users` — List Motion users visible to the API key.
- `list_workspaces` — List Motion workspaces available to the API key.
- `update_task` — Update a Motion task by ID. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Motion state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Motion is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=motion
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Motion homepage: https://www.usemotion.com
