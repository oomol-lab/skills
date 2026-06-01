---
name: bestbuy
description: "Best Buy (bestbuy.com). Use this skill for ANY Best Buy request — searching and reading data. Whenever a task involves Best Buy, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Best Buy"
  author: "OOMOL"
  version: "1.0.0"
  service: "bestbuy"
  categories: "Data & Analytics"
  homepage: "https://www.bestbuy.com"
  icon: "https://static.oomol.com/logo/third-party/bestbuy.png"
---

# Best Buy

Operate **Best Buy** through your OOMOL-connected account. This skill calls the `bestbuy` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Best Buy. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "bestbuy" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "bestbuy" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_categories`](actions/get_categories.md) — List Best Buy categories with optional identifier or name filters.
- [`get_category_details`](actions/get_category_details.md) — Retrieve one Best Buy category by identifier.
- [`get_product_details`](actions/get_product_details.md) — Retrieve one Best Buy product by SKU.
- [`get_products`](actions/get_products.md) — List Best Buy products with optional SKU, UPC, name, category, or price filters.
- [`get_review_details`](actions/get_review_details.md) — Retrieve one Best Buy review by identifier.
- [`get_reviews`](actions/get_reviews.md) — List Best Buy product reviews with optional SKU, reviewer, and rating filters.
- [`get_store_details`](actions/get_store_details.md) — Retrieve one Best Buy store by store identifier.
- [`get_stores`](actions/get_stores.md) — List Best Buy stores with optional geographic and attribute filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Best Buy state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Best Buy is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=bestbuy
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Best Buy homepage: https://www.bestbuy.com
