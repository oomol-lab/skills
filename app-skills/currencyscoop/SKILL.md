---
name: currencyscoop
description: "CurrencyBeacon (currencybeacon.com). Use this skill for ANY CurrencyBeacon request — searching and reading data. Whenever a task involves CurrencyBeacon, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "CurrencyBeacon"
  author: "OOMOL"
  version: "1.0.0"
  service: "currencyscoop"
  categories: "Finance, Data & Analytics"
  homepage: "https://currencybeacon.com"
  icon: "https://static.oomol.com/logo/third-party/CurrencyScoop.svg"
---

# CurrencyBeacon

Operate **CurrencyBeacon** through your OOMOL-connected account. This skill calls the `currencyscoop` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected CurrencyBeacon. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "currencyscoop" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "currencyscoop" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`convert_currency`](actions/convert_currency.md) — Convert an amount between two currencies using CurrencyBeacon exchange rates.
- [`get_currencies`](actions/get_currencies.md) — Retrieve the supported currencies exposed by CurrencyBeacon.
- [`get_historical_rates`](actions/get_historical_rates.md) — Retrieve historical exchange rates for a specific date from CurrencyBeacon.
- [`get_latest_rates`](actions/get_latest_rates.md) — Retrieve the latest exchange rates for a base currency from CurrencyBeacon.
- [`get_timeseries_rates`](actions/get_timeseries_rates.md) — Retrieve exchange rates across a date range from CurrencyBeacon.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change CurrencyBeacon state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — CurrencyBeacon is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=currencyscoop
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- CurrencyBeacon homepage: https://currencybeacon.com
