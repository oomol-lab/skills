---
name: oo-woocommerce
description: "WooCommerce (woocommerce.com). Use this skill for ANY WooCommerce request — reading, creating, and updating data. Whenever a task involves WooCommerce, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "WooCommerce"
  author: "OOMOL"
  version: "1.0.0"
  service: "woocommerce"
  categories: "Marketing"
  homepage: "https://woocommerce.com"
  icon: "https://static.oomol.com/logo/third-party/woocommerce.svg"
---

# WooCommerce

Operate **WooCommerce** through your OOMOL-connected account. This skill calls the `woocommerce` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing. Exposes 26 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected WooCommerce. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "woocommerce" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "woocommerce" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_order_note`](actions/add_order_note.md) — Add an administrator or customer-visible note to one WooCommerce order.
- [`create_coupon`](actions/create_coupon.md) — Create a WooCommerce coupon.
- [`create_order`](actions/create_order.md) — Create a WooCommerce order with customer, address, line item, and coupon fields.
- [`create_product`](actions/create_product.md) — Create a WooCommerce product with catalog, price, stock, image, and attribute fields.
- [`create_product_variation`](actions/create_product_variation.md) — Create a variation for one WooCommerce variable product.
- [`get_coupon`](actions/get_coupon.md) — Fetch one WooCommerce coupon by coupon ID.
- [`get_customer`](actions/get_customer.md) — Fetch one WooCommerce customer by customer ID.
- [`get_order`](actions/get_order.md) — Fetch one WooCommerce order by order ID.
- [`get_product`](actions/get_product.md) — Fetch one WooCommerce product by product ID.
- [`get_product_variation`](actions/get_product_variation.md) — Fetch one WooCommerce product variation by product and variation ID.
- [`list_coupons`](actions/list_coupons.md) — List WooCommerce coupons with common code search and pagination metadata.
- [`list_customers`](actions/list_customers.md) — List WooCommerce customers with common filters and pagination metadata.
- [`list_order_notes`](actions/list_order_notes.md) — List notes for one WooCommerce order.
- [`list_orders`](actions/list_orders.md) — List WooCommerce orders with common status, customer, and date filters.
- [`list_product_attribute_terms`](actions/list_product_attribute_terms.md) — List terms for one WooCommerce product attribute.
- [`list_product_attributes`](actions/list_product_attributes.md) — List WooCommerce product attributes.
- [`list_product_categories`](actions/list_product_categories.md) — List WooCommerce product categories with filters and pagination metadata.
- [`list_product_tags`](actions/list_product_tags.md) — List WooCommerce product tags with filters and pagination metadata.
- [`list_product_variations`](actions/list_product_variations.md) — List variations for one WooCommerce variable product.
- [`list_products`](actions/list_products.md) — List WooCommerce products with common catalog filters and pagination metadata.
- [`update_coupon`](actions/update_coupon.md) — Update a WooCommerce coupon by coupon ID.
- [`update_order`](actions/update_order.md) — Update a WooCommerce order by order ID.
- [`update_order_status`](actions/update_order_status.md) — Update the status of one WooCommerce order.
- [`update_product`](actions/update_product.md) — Update a WooCommerce product by product ID.
- [`update_product_variation`](actions/update_product_variation.md) — Update one WooCommerce product variation.
- [`upload_media`](actions/upload_media.md) — Upload one media file to the WordPress media library used by WooCommerce.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change WooCommerce state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — WooCommerce is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=woocommerce
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- WooCommerce homepage: https://woocommerce.com
