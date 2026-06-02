---
name: oo-marketstack
description: "Marketstack (marketstack.com). Use this skill for ANY Marketstack request — searching and reading data. Whenever a task involves Marketstack, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Marketstack"
  author: "OOMOL"
  version: "1.0.0"
  service: "marketstack"
  categories: "Finance, Data & Analytics"
  homepage: "https://marketstack.com"
  icon: "https://static.oomol.com/logo/third-party/Marketstack.svg"
---

# Marketstack

Operate **Marketstack** through your OOMOL-connected account. This skill calls the `marketstack` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Marketstack. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "marketstack" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "marketstack" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_historical_eod`](actions/get_historical_eod.md) — Get historical end-of-day data from Marketstack for one or more comma-separated symbols.
- [`get_latest_eod`](actions/get_latest_eod.md) — Get the latest available end-of-day data for a single Marketstack symbol.
- [`get_ticker_info`](actions/get_ticker_info.md) — Get profile information for a single Marketstack ticker.
- [`list_currencies`](actions/list_currencies.md) — List currencies available through Marketstack.
- [`list_exchanges`](actions/list_exchanges.md) — List stock exchanges available through Marketstack.
- [`list_tickers`](actions/list_tickers.md) — List Marketstack tickers with optional search, exchange, and pagination filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Marketstack state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Marketstack is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=marketstack
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Marketstack homepage: https://marketstack.com
