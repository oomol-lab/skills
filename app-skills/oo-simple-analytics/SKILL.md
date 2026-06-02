---
name: oo-simple-analytics
description: "Simple Analytics (simpleanalytics.com). Use this skill for ANY Simple Analytics request — reading, creating, and updating data. Whenever a task involves Simple Analytics, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Simple Analytics"
  author: "OOMOL"
  version: "1.0.0"
  service: "simple_analytics"
  categories: "Data & Analytics, Marketing"
  homepage: "https://simpleanalytics.com"
  icon: "https://static.oomol.com/logo/third-party/SimpleAnalytics.svg"
---

# Simple Analytics

Operate **Simple Analytics** through your OOMOL-connected account. This skill calls the `simple_analytics` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Simple Analytics. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "simple_analytics" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "simple_analytics" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`export_data_points`](actions/export_data_points.md) — Export raw datapoints from the Simple Analytics Export API.
- [`get_aggregated_stats`](actions/get_aggregated_stats.md) — Get aggregated website statistics from the Simple Analytics Stats API.
- [`list_websites`](actions/list_websites.md) — List websites available to the authenticated Simple Analytics account.
- [`send_event`](actions/send_event.md) — Send a server-side event or pageview to Simple Analytics.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Simple Analytics state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Simple Analytics is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=simple_analytics
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Simple Analytics homepage: https://simpleanalytics.com
