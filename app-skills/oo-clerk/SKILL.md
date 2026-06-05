---
name: oo-clerk
description: "Clerk (clerk.com). Use this skill for ANY Clerk request — reading, creating, updating, and deleting data. Whenever a task involves Clerk, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Clerk"
  author: "OOMOL"
  version: "1.0.0"
  service: "clerk"
  categories: "Security & Identity, Developer Tools"
  homepage: "https://clerk.com"
---

# Clerk

Operate **Clerk** through your OOMOL-connected account. This skill calls the `clerk` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Developer Tools. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Clerk. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "clerk" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "clerk" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`ban_user`](actions/ban_user.md) — Ban a Clerk user.
- [`count_users`](actions/count_users.md) — Count Clerk users with optional filters.
- [`create_user`](actions/create_user.md) — Create a Clerk user.
- [`delete_user`](actions/delete_user.md) — Delete a Clerk user.
- [`get_user`](actions/get_user.md) — Retrieve a Clerk user by ID.
- [`list_users`](actions/list_users.md) — List Clerk users with optional filtering and pagination.
- [`lock_user`](actions/lock_user.md) — Lock a Clerk user.
- [`unban_user`](actions/unban_user.md) — Unban a Clerk user.
- [`unlock_user`](actions/unlock_user.md) — Unlock a Clerk user.
- [`update_user`](actions/update_user.md) — Update a Clerk user.
- [`update_user_metadata`](actions/update_user_metadata.md) — Deep merge metadata for a Clerk user.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Clerk state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Clerk is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=clerk
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Clerk homepage: https://clerk.com
