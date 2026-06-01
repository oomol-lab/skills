---
name: manus
description: "Manus (manus.im). Use this skill for ANY Manus request — reading, creating, updating, and deleting data. Whenever a task involves Manus, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Manus"
  author: "OOMOL"
  version: "1.0.0"
  service: "manus"
  categories: "AI, Productivity"
  homepage: "https://manus.im"
  icon: "https://static.oomol.com/logo/third-party/manus.svg"
---

# Manus

Operate **Manus** through your OOMOL-connected account. This skill calls the `manus` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Productivity. Exposes 17 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Manus. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "manus" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "manus" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`confirm_task_action`](actions/confirm_task_action.md) — Confirm a pending Manus task action from a waiting status event. Use send_message instead for messageAskUser events.
- [`create_project`](actions/create_project.md) — Create a Manus project for grouping tasks under shared instructions.
- [`create_task`](actions/create_task.md) — Create a new asynchronous Manus task from a message and optional project, connector, skill, sharing, or structured-output settings.
- [`delete_task`](actions/delete_task.md) — Permanently delete a stopped Manus task. Stop a running task before deleting it.
- [`get_agent`](actions/get_agent.md) — Retrieve a Manus custom agent by ID.
- [`get_task`](actions/get_task.md) — Retrieve a Manus task's current status and metadata.
- [`list_agents`](actions/list_agents.md) — List Manus custom agents in the current account.
- [`list_connectors`](actions/list_connectors.md) — List Manus connectors installed in the current account.
- [`list_online_browser_clients`](actions/list_online_browser_clients.md) — List online Manus browser clients that can be selected when confirming needConnectMyBrowser waiting events.
- [`list_projects`](actions/list_projects.md) — List Manus projects available to the current account.
- [`list_skills`](actions/list_skills.md) — List Manus skills available to the current account or project.
- [`list_task_messages`](actions/list_task_messages.md) — List Manus task event messages with cursor pagination.
- [`list_tasks`](actions/list_tasks.md) — List Manus tasks with optional scope filters and cursor pagination.
- [`send_message`](actions/send_message.md) — Send a follow-up message to an existing Manus task.
- [`stop_task`](actions/stop_task.md) — Stop a running Manus task.
- [`update_agent`](actions/update_agent.md) — Update a Manus custom agent's display name or description.
- [`update_task`](actions/update_task.md) — Update a Manus task title, sharing visibility, or task-list visibility.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Manus state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Manus is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=manus
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Manus homepage: https://manus.im
