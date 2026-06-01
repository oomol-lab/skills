---
name: coinmarketcap
description: "CoinMarketCap (coinmarketcap.com). Use this skill for ANY CoinMarketCap request — searching and reading data. Whenever a task involves CoinMarketCap, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "CoinMarketCap"
  author: "OOMOL"
  version: "1.0.0"
  service: "coinmarketcap"
  categories: "Finance, Data & Analytics"
  homepage: "https://coinmarketcap.com"
  icon: "https://static.oomol.com/logo/third-party/coinmarketcap.svg"
---

# CoinMarketCap

Operate **CoinMarketCap** through your OOMOL-connected account. This skill calls the `coinmarketcap` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected CoinMarketCap. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "coinmarketcap" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "coinmarketcap" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`convert_price`](actions/convert_price.md) — Convert an asset amount into another fiat or cryptocurrency using CoinMarketCap pricing.
- [`get_cryptocurrency_map`](actions/get_cryptocurrency_map.md) — Retrieve CoinMarketCap asset IDs, symbols, and slugs for cryptocurrency discovery.
- [`get_key_info`](actions/get_key_info.md) — Retrieve plan limits and usage details for the current CoinMarketCap API key.
- [`get_latest_cryptocurrency_quotes`](actions/get_latest_cryptocurrency_quotes.md) — Retrieve the latest quotes for one or more cryptocurrencies by id, symbol, or slug.
- [`get_latest_global_metrics_quotes`](actions/get_latest_global_metrics_quotes.md) — Retrieve the latest global cryptocurrency market metrics and quote aggregates.
- [`list_latest_cryptocurrency_listings`](actions/list_latest_cryptocurrency_listings.md) — Retrieve the latest cryptocurrency listings ordered by CoinMarketCap ranking and filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change CoinMarketCap state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — CoinMarketCap is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=coinmarketcap
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- CoinMarketCap homepage: https://coinmarketcap.com
