---
name: oo-sellersprite-mcp
description: "SellerSprite MCP (open.sellersprite.com). Use this skill for ANY SellerSprite MCP request — reading, creating, and updating data. Whenever a task involves SellerSprite MCP, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SellerSprite MCP"
  author: "OOMOL"
  version: "1.0.6"
  services: ["sellersprite_mcp"]
  icon: "https://static.oomol.com/logo/third-party/sellersprite_mcp.svg"
---

# SellerSprite MCP

Operate **SellerSprite MCP** through your OOMOL-connected account. This skill calls the `sellersprite_mcp` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SellerSprite MCP. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sellersprite_mcp" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sellersprite_mcp" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `ads.insights.lookup` — Look up SP advertising campaigns, ad groups and activity for an ASIN.
- `asin.content.list` — Read product bullet points and main images.
- `asin.coreKeyword.trend` — Read monthly search-volume trends for an ASIN’s leading traffic keywords.
- `asin.detail` — Read product details for up to 20 ASINs.
- `asin.list` — Find Amazon products by keyword, category, brand, sales and price.
- `asin.prediction.sales` — Read recent daily sales and BSR estimates for an ASIN.
- `asin.related.list` — Find products linked through purchases, browsing and advertising.
- `asin.review.list` — Read up to 100 product reviews with rating, media and SKU filters.
- `asin.review.list.extended` — Read up to 500 product reviews. Extended retrieval may take about two minutes.
- `asin.sales.trend` — Compare monthly parent and child ASIN sales, revenue and rank trends.
- `bsr.prediction.sales` — Estimate daily and monthly sales from a category and BSR rank.
- `call_tool` — Call a current SellerSprite MCP tool with JSON arguments after inspecting its live schema and behavior annotations with list_tools. [write]
- `category.ai.feature.list` — Explore AI-extracted product attributes for a category.
- `category.demand.report` — Read category demand, search and purchase trends from Amazon Product Opportunity Explorer.
- `category.demand.trend` — Explore category keyword demand and 24-month search trends.
- `category.report.detail` — Read a category’s market report for the last 30 days or 24 months.
- `category.search` — Find Amazon categories and their node paths.
- `category.stats.list` — Filter and compare categories by market size, growth and competition.
- `category.top.list` — Rank leading products, brands or sellers within a category.
- `category.trend` — Compare category distributions by sales, price, ratings, listing age and sellers.
- `keepa.trend` — Read historical prices, rankings, ratings and coupon data.
- `keyword.aba.list` — Search ABA keyword rankings or look up rankings by ASIN.
- `keyword.aba.trend` — Read ABA rank, search volume and top-three click and conversion share trends.
- `keyword.asin.list` — Find traffic keywords for up to 10 ASINs and compare their traffic shares.
- `keyword.batch.info` — Compare search and purchase metrics for up to 20 keywords.
- `keyword.conversion.analysis` — Analyze keyword advertising clicks, conversions, ACOS and CPA.
- `keyword.google.trend` — Read Google Trends interest for a keyword on Web or Shopping.
- `keyword.related.list` — Expand a seed keyword and compare demand, competition and PPC bids.
- `keyword.trend` — Read keyword search volume, purchase volume and conversion trends.
- `list_tools` — Discover the current SellerSprite Amazon research and market-data MCP tools with their live input schemas and behavior annotations.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change SellerSprite MCP state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SellerSprite MCP is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/sellersprite_mcp
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- SellerSprite MCP homepage: https://open.sellersprite.com/mcp
- API documentation: https://www.sellersprite.com/v3/knowledge/feature/MCP-V1-V2-Migration-Guide
