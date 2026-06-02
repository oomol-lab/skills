---
name: oo-finage
description: "Finage (finage.co.uk). Use this skill for ANY Finage request — reading, creating, and updating data. Whenever a task involves Finage, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Finage"
  author: "OOMOL"
  version: "1.0.0"
  service: "finage"
  categories: "Finance, Data & Analytics"
  homepage: "https://finage.co.uk"
  icon: "https://static.oomol.com/logo/third-party/Finage.svg"
---

# Finage

Operate **Finage** through your OOMOL-connected account. This skill calls the `finage` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Finage. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "finage" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "finage" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_aggregates`](actions/get_aggregates.md) — Get Finage OHLCV aggregate bars for a U.S. stock over a date range.
- [`get_last_quote`](actions/get_last_quote.md) — Get the latest Finage quote for a single U.S. stock symbol.
- [`get_last_trade`](actions/get_last_trade.md) — Get the latest Finage trade for a single U.S. stock symbol.
- [`get_previous_close`](actions/get_previous_close.md) — Get the previous close aggregate bar for a single Finage U.S. stock symbol.
- [`get_snapshot`](actions/get_snapshot.md) — Get a Finage stock snapshot for a bounded list of U.S. stock symbols, including quotes, trades, or both.
- [`list_stock_symbols`](actions/list_stock_symbols.md) — List Finage U.S. stock symbols with optional page and search filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Finage state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Finage is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=finage
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Finage homepage: https://finage.co.uk
