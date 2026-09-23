---
name: oo-aisa
description: "AIsa (aisa.one). Use this skill for ANY AIsa request — searching and reading data. Whenever a task involves AIsa, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "AIsa"
  author: "OOMOL"
  version: "1.0.1"
  services: ["aisa"]
  icon: "https://static.oomol.com/logo/third-party/aisa.svg"
---

# AIsa

Operate **AIsa** through your OOMOL-connected account. This skill calls the `aisa` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected AIsa. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "aisa" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "aisa" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `get_credits_balance` — Get the current AIsa account, key, and go-to-market credit balances.
- `get_kalshi_markets` — List Kalshi prediction markets with live quotes, settlement rules, and pagination.
- `get_kalshi_trades` — List executed Kalshi trades with prices, size, side, and pagination.
- `get_polymarket_activity` — Get one wallet's Polymarket split, merge, and redemption activity.
- `get_polymarket_events` — List Polymarket events and their related prediction markets.
- `get_polymarket_markets` — List Polymarket questions with outcome prices, liquidity, volume, and date filters.
- `get_usage` — Get AIsa request, token, value, and charged usage in daily buckets.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change AIsa state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — AIsa is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=aisa
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- AIsa homepage: https://aisa.one
