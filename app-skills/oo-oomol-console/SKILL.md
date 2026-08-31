---
name: oo-oomol-console
description: "OOMOL Console (console.oomol.com). Use this skill for ANY OOMOL Console request — reading, creating, updating, and deleting data. Whenever a task involves OOMOL Console, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OOMOL Console"
  author: "OOMOL"
  version: "1.0.0"
  services: ["oomol_console"]
  icon: "https://static.oomol.com/logo/third-party/oomol_console.svg"
---

# OOMOL Console

Operate **OOMOL Console** through your OOMOL-connected account. This skill calls the `oomol_console` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

OOMOL Console needs no account connection. Assume the oo CLI is installed and signed in. **Do not run `oo auth login` proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "oomol_console" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "oomol_console" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `add_member` — Add an OOMOL user to the current team with the member role. [write]
- `create_connection_permission_group` — Create a custom Connection permission group and replace the assignments of its members. [write]
- `delete_connection_permission_group` — Delete a custom Connection permission group so its members return to the default group. [destructive]
- `get_balance` — Return every available balance lot for the authenticated OOMOL account.
- `get_billing_summary` — Return the compact OOMOL account billing metrics shown by Console.
- `get_current_scope` — Return the current OOMOL team scope and authenticated principal.
- `get_team_summary` — Return metadata and member counts for the current OOMOL team.
- `get_usage_breakdown` — Return the daily OOMOL account usage breakdown by source and subject.
- `list_connection_executions` — List the execution records shown on an OOMOL Console Connection details page.
- `list_connection_permission_groups` — List the default and custom permission groups for one current-team Connection.
- `list_members` — List members of the current OOMOL team.
- `list_team_connections` — List the Connections manageable by an administrator of the current OOMOL team.
- `list_teams` — List the OOMOL teams visible to the authenticated account.
- `update_connection_default_permission_group` — Replace the action permission of a Connection's non-deletable default permission group. [write]
- `update_connection_permission_group` — Replace the name, member assignments, and action permission of a custom Connection permission group. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change OOMOL Console state — confirm the exact payload and effect with the user before running.**
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

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- OOMOL Console homepage: https://console.oomol.com
