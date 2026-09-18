---
name: oo-investoday-mcp
description: "Investoday MCP (data-api.investoday.net). Use this skill for ANY Investoday MCP request — searching and reading data. Whenever a task involves Investoday MCP, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Investoday MCP"
  author: "OOMOL"
  version: "1.0.0"
  services: ["investoday_mcp"]
  icon: "https://static.oomol.com/logo/third-party/investoday_mcp.png"
---

# Investoday MCP

Operate **Investoday MCP** through your OOMOL-connected account. This skill calls the `investoday_mcp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Investoday MCP. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "investoday_mcp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "investoday_mcp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `call_tool` — Call a current Investoday MCP tool with JSON arguments after checking its live schema and behavior annotations.
- `get_market_change_ratio_status` — Get current market breadth, including rising, falling and limit-up or limit-down stock counts.
- `get_stock_basic_info` — Get basic information for one or multiple Shanghai, Shenzhen or Beijing stocks.
- `get_stock_quote_realtime` — Get the latest realtime quote for one Shanghai, Shenzhen or Beijing stock.
- `get_stock_val_indicators` — Get stock valuation indicators including market capitalization, PE, PB and PS over a date range.
- `list_report_research` — Find research reports by stock, industry, institution or category, with optional keywords and publication dates.
- `list_stock_adjusted_quotes` — Get forward-adjusted daily stock prices over a date range, including batch queries and pagination.
- `list_tools` — Discover the current Investoday financial market data and research MCP tools with their live input schemas.
- `search` — Search securities, funds, indices, industries and concepts by name or code.
- `search_announcements` — Search announcement passages by meaning, optionally filtering by stock, announcement ID and publication dates.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Investoday MCP state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Investoday MCP is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=investoday_mcp
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Investoday MCP homepage: https://data-api.investoday.net/mcp
