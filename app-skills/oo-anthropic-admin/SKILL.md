---
name: oo-anthropic-admin
description: "Anthropic Admin (anthropic.com). Use this skill for ANY Anthropic Admin request — searching and reading data. Whenever a task involves Anthropic Admin, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Anthropic Admin"
  author: "OOMOL"
  version: "1.0.0"
  services: ["anthropic_admin"]
  icon: "https://static.oomol.com/logo/third-party/anthropic_admin.svg"
---

# Anthropic Admin

Operate **Anthropic Admin** through your OOMOL-connected account. This skill calls the `anthropic_admin` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Anthropic Admin. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "anthropic_admin" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "anthropic_admin" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `get_organization` — Retrieve the Anthropic organization associated with the Admin API key.
- `list_api_keys` — List Anthropic API keys in the organization, optionally filtered by workspace.
- `list_invites` — List pending or historical Anthropic organization invites.
- `list_users` — List users in the Anthropic organization with cursor pagination.
- `list_workspace_members` — List members of one Anthropic workspace with cursor pagination.
- `list_workspaces` — List Anthropic workspaces in the organization with cursor pagination.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Anthropic Admin state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Anthropic Admin is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=anthropic_admin
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Anthropic Admin homepage: https://www.anthropic.com
