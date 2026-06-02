---
name: oo-plausible-analytics
description: "Plausible Analytics (plausible.io). Use this skill for ANY Plausible Analytics request — searching and reading data. Whenever a task involves Plausible Analytics, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Plausible Analytics"
  author: "OOMOL"
  version: "1.0.0"
  service: "plausible_analytics"
  categories: "Data & Analytics, Marketing"
  homepage: "https://plausible.io"
  icon: "https://static.oomol.com/logo/third-party/Plausible%20Analytics.svg"
---

# Plausible Analytics

Operate **Plausible Analytics** through your OOMOL-connected account. This skill calls the `plausible_analytics` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Plausible Analytics. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "plausible_analytics" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "plausible_analytics" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_breakdown_stats`](actions/get_breakdown_stats.md) — Query Plausible analytics grouped by a single dimension such as source, page, country, or browser.
- [`get_timeseries_stats`](actions/get_timeseries_stats.md) — Query Plausible analytics as a timeseries grouped by a time dimension such as day or hour.
- [`query_stats`](actions/query_stats.md) — Query historical or real-time analytics for a Plausible site using the Stats API v2.
- [`record_event`](actions/record_event.md) — Record a pageview or custom event through the Plausible Events API for server-side or app tracking.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Plausible Analytics state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Plausible Analytics is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=plausible_analytics
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Plausible Analytics homepage: https://plausible.io
