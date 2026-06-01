---
name: rocketlane
description: "Rocketlane (rocketlane.com). Use this skill for ANY Rocketlane request — searching and reading data. Whenever a task involves Rocketlane, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Rocketlane"
  author: "OOMOL"
  version: "1.0.0"
  service: "rocketlane"
  categories: "Productivity"
  homepage: "https://www.rocketlane.com"
  icon: "https://static.oomol.com/logo/third-party/rocketlane.svg"
---

# Rocketlane

Operate **Rocketlane** through your OOMOL-connected account. This skill calls the `rocketlane` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Rocketlane. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "rocketlane" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "rocketlane" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_project`](actions/get_project.md) — Get one Rocketlane project by numeric project ID.
- [`get_task`](actions/get_task.md) — Get one Rocketlane task by numeric task ID.
- [`get_user`](actions/get_user.md) — Get one Rocketlane user by numeric user ID.
- [`list_projects`](actions/list_projects.md) — List Rocketlane projects with pagination, sorting, and the first-pass project filters.
- [`list_tasks`](actions/list_tasks.md) — List Rocketlane tasks with pagination, sorting, and the first-pass task filters.
- [`list_users`](actions/list_users.md) — List Rocketlane users with pagination, sorting, and the first-pass user filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Rocketlane state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Rocketlane is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=rocketlane
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Rocketlane homepage: https://www.rocketlane.com
