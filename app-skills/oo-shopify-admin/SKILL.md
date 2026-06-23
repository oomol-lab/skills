---
name: oo-shopify-admin
description: "Shopify Admin (shopify.com). Use this skill for ANY Shopify Admin request — reading, creating, and updating data. Whenever a task involves Shopify Admin, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Shopify Admin"
  author: "OOMOL"
  version: "1.0.0"
  services: ["shopify_admin"]
  icon: "https://static.oomol.com/logo/third-party/shopify_admin.svg"
---

# Shopify Admin

Operate **Shopify Admin** through your OOMOL-connected account. This skill calls the `shopify_admin` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Shopify Admin. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shopify_admin" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shopify_admin" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `execute_graphql` — Execute a JSON-friendly Shopify Admin GraphQL query or mutation against the connected shop.
- `get_collection` — Retrieve one Shopify collection by GraphQL global ID.
- `get_customer` — Retrieve one Shopify customer by GraphQL global ID.
- `get_inventory_item` — Retrieve one Shopify inventory item by GraphQL global ID.
- `get_location` — Retrieve one Shopify location by GraphQL global ID.
- `get_order` — Retrieve one Shopify order by GraphQL global ID. [write]
- `get_product` — Retrieve one Shopify product by GraphQL global ID.
- `get_shop` — Retrieve basic shop information for the connected Shopify Admin token.
- `list_collections` — List Shopify collections with optional search query and cursor pagination.
- `list_customers` — List Shopify customers with optional search query and cursor pagination.
- `list_inventory_items` — List Shopify inventory items with optional search query and cursor pagination.
- `list_locations` — List Shopify inventory locations with optional filters and cursor pagination.
- `list_orders` — List Shopify orders with optional search query and cursor pagination.
- `list_product_variants` — List Shopify product variants with optional search query and cursor pagination.
- `list_products` — List Shopify products with optional search query and cursor pagination.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Shopify Admin state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Shopify Admin is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shopify_admin
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Shopify Admin homepage: https://www.shopify.com
