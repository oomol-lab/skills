---
name: alpha-vantage
description: "Alpha Vantage (alphavantage.co). Use this skill for ANY Alpha Vantage request — searching and reading data. Whenever a task involves Alpha Vantage, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Alpha Vantage"
  author: "OOMOL"
  version: "1.0.0"
  service: "alpha_vantage"
  categories: "Finance, Data & Analytics"
  homepage: "https://www.alphavantage.co"
  icon: "https://static.oomol.com/logo/third-party/Alpha%20Vantage.svg"
---

# Alpha Vantage

Operate **Alpha Vantage** through your OOMOL-connected account. This skill calls the `alpha_vantage` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Alpha Vantage. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "alpha_vantage" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "alpha_vantage" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_daily_time_series`](actions/get_daily_time_series.md) — Retrieve the raw daily OHLCV time series for a single stock symbol from Alpha Vantage.
- [`get_global_quote`](actions/get_global_quote.md) — Retrieve the latest end-of-day quote snapshot for a single stock symbol from Alpha Vantage.
- [`get_market_status`](actions/get_market_status.md) — Retrieve the current open or closed status for major equity, forex, and cryptocurrency markets.
- [`get_monthly_time_series`](actions/get_monthly_time_series.md) — Retrieve the raw monthly OHLCV time series for a single stock symbol from Alpha Vantage.
- [`get_weekly_time_series`](actions/get_weekly_time_series.md) — Retrieve the raw weekly OHLCV time series for a single stock symbol from Alpha Vantage.
- [`search_symbols`](actions/search_symbols.md) — Search supported stocks, ETFs, and mutual funds by keyword and return the best matching symbols.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Alpha Vantage state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Alpha Vantage is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=alpha_vantage
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Alpha Vantage homepage: https://www.alphavantage.co
