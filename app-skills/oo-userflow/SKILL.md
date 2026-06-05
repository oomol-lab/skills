---
name: oo-userflow
description: "Userflow (userflow.com). Use this skill for ANY Userflow request — reading, creating, updating, and deleting data. Whenever a task involves Userflow, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Userflow"
  author: "OOMOL"
  version: "1.0.0"
  service: "userflow"
  categories: "Data & Analytics, Marketing"
  homepage: "https://userflow.com"
---

# Userflow

Operate **Userflow** through your OOMOL-connected account. This skill calls the `userflow` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Userflow. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "userflow" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "userflow" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_group`](actions/delete_group.md) — Delete one Userflow group by ID.
- [`delete_user`](actions/delete_user.md) — Delete one Userflow user by ID.
- [`get_group`](actions/get_group.md) — Fetch one Userflow group by ID.
- [`get_user`](actions/get_user.md) — Fetch one Userflow user by ID.
- [`list_users`](actions/list_users.md) — List Userflow users with optional cursor pagination and filters.
- [`track_event`](actions/track_event.md) — Track one Userflow event for a user.
- [`upsert_group`](actions/upsert_group.md) — Create or update one Userflow group.
- [`upsert_user`](actions/upsert_user.md) — Create or update one Userflow user.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Userflow state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Userflow is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=userflow
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Userflow homepage: https://userflow.com
