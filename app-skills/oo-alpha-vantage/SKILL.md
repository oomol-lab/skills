---
name: oo-alpha-vantage
description: "Alpha Vantage (alphavantage.co). Use this skill for ANY Alpha Vantage request — searching and reading data. Whenever a task involves Alpha Vantage, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Alpha Vantage"
  author: "OOMOL"
  version: "1.0.1"
  service: "alpha_vantage"
  categories: "Finance, Data & Analytics"
  homepage: "https://www.alphavantage.co"
  icon: "https://static.oomol.com/logo/third-party/Alpha%20Vantage.svg"
---

# Alpha Vantage

Operate **Alpha Vantage** through your OOMOL-connected account. This skill calls the `alpha_vantage` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 44 action(s).

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

- [`call_official_function`](actions/call_official_function.md) — Call a documented Alpha Vantage query function with raw JSON-facing parameters for advanced coverage.
- [`get_balance_sheet`](actions/get_balance_sheet.md) — Retrieve raw annual and quarterly balance sheet data for a company.
- [`get_cash_flow`](actions/get_cash_flow.md) — Retrieve raw annual and quarterly cash flow data for a company.
- [`get_commodity_data`](actions/get_commodity_data.md) — Retrieve raw commodity time series data from an Alpha Vantage commodity endpoint.
- [`get_company_overview`](actions/get_company_overview.md) — Retrieve raw company overview and fundamental data for a stock symbol.
- [`get_crypto_intraday`](actions/get_crypto_intraday.md) — Retrieve raw intraday OHLCV data for a cryptocurrency market pair.
- [`get_currency_exchange_rate`](actions/get_currency_exchange_rate.md) — Retrieve the raw realtime exchange rate for a currency pair.
- [`get_daily_adjusted_time_series`](actions/get_daily_adjusted_time_series.md) — Retrieve raw daily adjusted OHLCV, dividend, and split data for a stock symbol from Alpha Vantage.
- [`get_daily_time_series`](actions/get_daily_time_series.md) — Retrieve the raw daily OHLCV time series for a single stock symbol from Alpha Vantage.
- [`get_digital_currency_daily`](actions/get_digital_currency_daily.md) — Retrieve raw daily historical time series data for a digital currency.
- [`get_digital_currency_monthly`](actions/get_digital_currency_monthly.md) — Retrieve raw monthly historical time series data for a digital currency.
- [`get_digital_currency_weekly`](actions/get_digital_currency_weekly.md) — Retrieve raw weekly historical time series data for a digital currency.
- [`get_dividends`](actions/get_dividends.md) — Retrieve raw historical and future dividend data for a stock symbol.
- [`get_earnings`](actions/get_earnings.md) — Retrieve raw annual and quarterly earnings data for a company.
- [`get_earnings_calendar`](actions/get_earnings_calendar.md) — Retrieve raw upcoming earnings calendar data as CSV.
- [`get_earnings_call_transcript`](actions/get_earnings_call_transcript.md) — Retrieve a raw earnings call transcript for a symbol, quarter, and fiscal year.
- [`get_earnings_estimates`](actions/get_earnings_estimates.md) — Retrieve raw analyst earnings estimates for a company.
- [`get_etf_profile`](actions/get_etf_profile.md) — Retrieve raw ETF profile and holdings data for an ETF symbol.
- [`get_fx_daily`](actions/get_fx_daily.md) — Retrieve raw daily forex OHLC data for a currency pair.
- [`get_fx_intraday`](actions/get_fx_intraday.md) — Retrieve raw intraday forex OHLC data for a currency pair.
- [`get_fx_monthly`](actions/get_fx_monthly.md) — Retrieve raw monthly forex OHLC data for a currency pair.
- [`get_fx_weekly`](actions/get_fx_weekly.md) — Retrieve raw weekly forex OHLC data for a currency pair.
- [`get_global_quote`](actions/get_global_quote.md) — Retrieve the latest end-of-day quote snapshot for a single stock symbol from Alpha Vantage.
- [`get_historical_options`](actions/get_historical_options.md) — Retrieve raw historical options data for a stock symbol.
- [`get_income_statement`](actions/get_income_statement.md) — Retrieve raw annual and quarterly income statement data for a company.
- [`get_insider_transactions`](actions/get_insider_transactions.md) — Retrieve raw insider transaction data for a stock symbol.
- [`get_institutional_holdings`](actions/get_institutional_holdings.md) — Retrieve raw institutional holding data for a stock symbol.
- [`get_intraday_time_series`](actions/get_intraday_time_series.md) — Retrieve raw intraday OHLCV time series data for a stock symbol from Alpha Vantage.
- [`get_ipo_calendar`](actions/get_ipo_calendar.md) — Retrieve raw upcoming IPO calendar data as CSV.
- [`get_listing_status`](actions/get_listing_status.md) — Retrieve raw active or delisted listing status data as CSV.
- [`get_macro_indicator`](actions/get_macro_indicator.md) — Retrieve raw macroeconomic indicator data from Alpha Vantage.
- [`get_market_status`](actions/get_market_status.md) — Retrieve the current open or closed status for major equity, forex, and cryptocurrency markets.
- [`get_monthly_adjusted_time_series`](actions/get_monthly_adjusted_time_series.md) — Retrieve raw monthly adjusted OHLCV and dividend data for a stock symbol from Alpha Vantage.
- [`get_monthly_time_series`](actions/get_monthly_time_series.md) — Retrieve the raw monthly OHLCV time series for a single stock symbol from Alpha Vantage.
- [`get_news_sentiment`](actions/get_news_sentiment.md) — Retrieve raw live and historical market news and sentiment data.
- [`get_realtime_bulk_quotes`](actions/get_realtime_bulk_quotes.md) — Retrieve raw realtime bulk quotes for up to 100 stock symbols.
- [`get_realtime_options`](actions/get_realtime_options.md) — Retrieve raw realtime options data for a stock symbol.
- [`get_sector_performance`](actions/get_sector_performance.md) — Retrieve raw realtime and historical sector performance data.
- [`get_splits`](actions/get_splits.md) — Retrieve raw historical split data for a stock symbol.
- [`get_technical_indicator`](actions/get_technical_indicator.md) — Retrieve raw technical indicator data using an official Alpha Vantage indicator function.
- [`get_top_gainers_losers`](actions/get_top_gainers_losers.md) — Retrieve the raw Alpha Vantage top gainers, losers, and most active stocks.
- [`get_weekly_adjusted_time_series`](actions/get_weekly_adjusted_time_series.md) — Retrieve raw weekly adjusted OHLCV and dividend data for a stock symbol from Alpha Vantage.
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
