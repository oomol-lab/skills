---
name: oo-render
description: "Render (render.com). Use this skill for ANY Render request — reading, creating, and updating data. Whenever a task involves Render, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Render"
  author: "OOMOL"
  version: "1.0.0"
  service: "render"
  categories: "Developer Tools"
  homepage: "https://render.com"
  icon: "https://static.oomol.com/logo/third-party/Render.svg"
---

# Render

Operate **Render** through your OOMOL-connected account. This skill calls the `render` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Render. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "render" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "render" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_current_user`](actions/get_current_user.md) — Get the currently authenticated Render user profile.
- [`get_service`](actions/get_service.md) — Get Render service details by service ID.
- [`list_deploys`](actions/list_deploys.md) — List recent Render deploys for a service.
- [`list_services`](actions/list_services.md) — List Render services with optional workspace, type, and suspension filters.
- [`list_workspaces`](actions/list_workspaces.md) — List Render workspaces available to the authenticated API key.
- [`restart_service`](actions/restart_service.md) — Restart a Render service.
- [`resume_service`](actions/resume_service.md) — Resume a suspended Render service.
- [`rollback_deploy`](actions/rollback_deploy.md) — Trigger a rollback to a previous deploy for a Render service.
- [`suspend_service`](actions/suspend_service.md) — Suspend a Render service.
- [`trigger_deploy`](actions/trigger_deploy.md) — Trigger a new deploy for a Render service.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Render state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Render is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=render
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Render homepage: https://render.com
