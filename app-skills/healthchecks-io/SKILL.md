---
name: healthchecks-io
description: "Healthchecks.io (healthchecks.io). Use this skill for ANY Healthchecks.io request — reading, creating, updating, and deleting data. Whenever a task involves Healthchecks.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Healthchecks.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "healthchecks_io"
  categories: "Developer Tools"
  homepage: "https://healthchecks.io"
  icon: "https://static.oomol.com/logo/third-party/healthchecks_io.svg"
---

# Healthchecks.io

Operate **Healthchecks.io** through your OOMOL-connected account. This skill calls the `healthchecks_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 11 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Healthchecks.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "healthchecks_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "healthchecks_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_check`](actions/create_check.md) — Create a Healthchecks.io simple or cron check.
- [`delete_check`](actions/delete_check.md) — Delete a Healthchecks.io check by UUID.
- [`get_check`](actions/get_check.md) — Get a Healthchecks.io check by UUID or unique key.
- [`list_badges`](actions/list_badges.md) — List badge metadata in the current Healthchecks.io project.
- [`list_channels`](actions/list_channels.md) — List notification integrations in the current Healthchecks.io project.
- [`list_checks`](actions/list_checks.md) — List Healthchecks.io checks in the current project.
- [`list_flips`](actions/list_flips.md) — List Healthchecks.io status flips for a check by UUID or unique key.
- [`list_pings`](actions/list_pings.md) — List recent Healthchecks.io pings for a check by UUID.
- [`pause_check`](actions/pause_check.md) — Pause monitoring for a Healthchecks.io check by UUID.
- [`resume_check`](actions/resume_check.md) — Resume monitoring for a Healthchecks.io check by UUID.
- [`update_check`](actions/update_check.md) — Update a Healthchecks.io check by UUID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Healthchecks.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Healthchecks.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=healthchecks_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Healthchecks.io homepage: https://healthchecks.io
