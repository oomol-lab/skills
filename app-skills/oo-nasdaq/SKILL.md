---
name: oo-nasdaq
description: "Nasdaq Data Link (data.nasdaq.com). Use this skill for ANY Nasdaq Data Link request — searching and reading data. Whenever a task involves Nasdaq Data Link, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Nasdaq Data Link"
  author: "OOMOL"
  version: "1.0.0"
  service: "nasdaq"
  categories: "Finance, Data & Analytics"
  homepage: "https://data.nasdaq.com"
  icon: "https://static.oomol.com/logo/third-party/Nasdaq.png"
---

# Nasdaq Data Link

Operate **Nasdaq Data Link** through your OOMOL-connected account. This skill calls the `nasdaq` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Nasdaq Data Link. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "nasdaq" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "nasdaq" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_analyst_ratings`](actions/get_analyst_ratings.md) — Retrieve analyst recommendation and target-price history for a stock symbol from the ZACKS analyst datatables.
- [`get_datatable`](actions/get_datatable.md) — Request a bulk export for a Nasdaq Data Link datatable and return the current file status plus download link when available.
- [`get_datatable_metadata`](actions/get_datatable_metadata.md) — Retrieve schema, filter, refresh, and premium metadata for a Nasdaq Data Link datatable.
- [`get_dividend_history`](actions/get_dividend_history.md) — Retrieve quarterly dividend fundamentals for a ticker from SHARADAR/SF1 using the ARQ dimension.
- [`get_end_of_day_quote`](actions/get_end_of_day_quote.md) — Retrieve QuoteMedia end-of-day price rows for a ticker, optionally filtered by a date range.
- [`get_real_time_quote`](actions/get_real_time_quote.md) — Compatibility alias of get_end_of_day_quote. Returns QuoteMedia end-of-day price rows rather than live real-time quotes.
- [`get_table_row`](actions/get_table_row.md) — Query a Nasdaq Data Link datatable with a single filter column and normalize the returned rows into key-value objects.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Nasdaq Data Link state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Nasdaq Data Link is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=nasdaq
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Nasdaq Data Link homepage: https://data.nasdaq.com
