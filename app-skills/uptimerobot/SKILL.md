---
name: uptimerobot
description: "UptimeRobot (uptimerobot.com). Use this skill for ANY UptimeRobot request — reading, creating, updating, and deleting data. Whenever a task involves UptimeRobot, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "UptimeRobot"
  author: "OOMOL"
  version: "1.0.0"
  service: "uptimerobot"
  categories: "Developer Tools"
  homepage: "https://uptimerobot.com"
  icon: "https://static.oomol.com/logo/third-party/Uptimerobot.svg"
---

# UptimeRobot

Operate **UptimeRobot** through your OOMOL-connected account. This skill calls the `uptimerobot` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected UptimeRobot. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "uptimerobot" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "uptimerobot" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_monitor`](actions/create_monitor.md) — Create a new monitor in the connected UptimeRobot account.
- [`delete_monitor`](actions/delete_monitor.md) — Delete a monitor from the connected UptimeRobot account.
- [`get_account_details`](actions/get_account_details.md) — Get account-level monitor usage and profile details from the connected UptimeRobot account.
- [`get_monitor`](actions/get_monitor.md) — Get the full configuration and current status of a single UptimeRobot monitor.
- [`list_alert_contacts`](actions/list_alert_contacts.md) — List the alert contacts configured in the connected UptimeRobot account.
- [`list_monitors`](actions/list_monitors.md) — List monitors available in the connected UptimeRobot account.
- [`update_monitor`](actions/update_monitor.md) — Update an existing monitor in the connected UptimeRobot account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change UptimeRobot state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — UptimeRobot is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=uptimerobot
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- UptimeRobot homepage: https://uptimerobot.com
