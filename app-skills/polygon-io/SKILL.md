---
name: polygon-io
description: "Massive (Polygon.io) (massive.com). Use this skill for ANY Massive (Polygon.io) request — searching and reading data. Whenever a task involves Massive (Polygon.io), use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Massive (Polygon.io)"
  author: "OOMOL"
  version: "1.0.0"
  service: "polygon_io"
  categories: "Finance, Data & Analytics"
  homepage: "https://massive.com/"
  icon: "https://static.oomol.com/logo/third-party/polygon_io.svg"
---

# Massive (Polygon.io)

Operate **Massive (Polygon.io)** through your OOMOL-connected account. This skill calls the `polygon_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Massive (Polygon.io). **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "polygon_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "polygon_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_aggregate_bars`](actions/get_aggregate_bars.md) — Get historical OHLC aggregate bars for a stock ticker over a custom range.
- [`get_market_status`](actions/get_market_status.md) — Get the current Polygon.io market status for stocks, currencies, and indices.
- [`get_previous_day_bar`](actions/get_previous_day_bar.md) — Get the previous trading day's OHLC aggregate bar for a stock ticker.
- [`get_ticker_details`](actions/get_ticker_details.md) — Get comprehensive details for a single Polygon.io ticker.
- [`list_exchanges`](actions/list_exchanges.md) — List known exchanges available through Polygon.io.
- [`list_ticker_types`](actions/list_ticker_types.md) — List ticker type codes supported by Polygon.io.
- [`list_tickers`](actions/list_tickers.md) — List ticker symbols supported by Polygon.io with optional filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Massive (Polygon.io) state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Massive (Polygon.io) is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=polygon_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Massive (Polygon.io) homepage: https://massive.com/
