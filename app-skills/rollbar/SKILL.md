---
name: rollbar
description: "Rollbar (rollbar.com). Use this skill for ANY Rollbar request — searching and reading data. Whenever a task involves Rollbar, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Rollbar"
  author: "OOMOL"
  version: "1.0.0"
  service: "rollbar"
  categories: "Developer Tools, Security & Identity"
  homepage: "https://rollbar.com"
  icon: "https://static.oomol.com/logo/third-party/rollbar.svg"
---

# Rollbar

Operate **Rollbar** through your OOMOL-connected account. This skill calls the `rollbar` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Security & Identity. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Rollbar. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "rollbar" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "rollbar" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_deploy`](actions/get_deploy.md) — Get one Rollbar deploy by deploy ID.
- [`get_item`](actions/get_item.md) — Get one Rollbar item by item ID.
- [`get_occurrence`](actions/get_occurrence.md) — Get one Rollbar occurrence by occurrence ID.
- [`get_project`](actions/get_project.md) — Get one Rollbar project by project ID.
- [`list_deploys`](actions/list_deploys.md) — List deploys in the connected Rollbar project.
- [`list_environments`](actions/list_environments.md) — List environments in the connected Rollbar project.
- [`list_item_occurrences`](actions/list_item_occurrences.md) — List occurrences for one Rollbar item.
- [`list_items`](actions/list_items.md) — List Rollbar items in the connected project with optional filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Rollbar state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Rollbar is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=rollbar
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Rollbar homepage: https://rollbar.com
