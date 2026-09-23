---
name: oo-weixin-store
description: "WeChat Store (channels.weixin.qq.com). Use this skill for ANY WeChat Store request — reading, creating, updating, and deleting data. Whenever a task involves WeChat Store, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "WeChat Store"
  author: "OOMOL"
  version: "1.0.0"
  services: ["weixin_store"]
  icon: "https://static.oomol.com/logo/third-party/weixin_store.svg"
---

# WeChat Store

Operate **WeChat Store** through your OOMOL-connected account. This skill calls the `weixin_store` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected WeChat Store. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "weixin_store" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "weixin_store" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `accept_aftersale` — Accept a buyer's after-sale request. Accepting a return needs a merchant address id from list_addresses; acceptType chooses between accepting the return (1) and accepting the refund (2), and is chosen automatically when omitted. [write]
- `add_product` — Create a product. All image fields must be WeChat-hosted URLs from upload_image. By default the product is saved as a draft; pass listing 1 to submit it for review and list it directly. Nested objects and arrays keep their WeChat snake_case fields as documented per field. [write]
- `delete_product` — Permanently delete a product by product_id. A product under review cannot be deleted. This cannot be undone. [destructive]
- `delisting_product` — Take a listed product off the shelf. [write]
- `get_address` — Get one merchant address by address_id, including its contact, region, and send/recv flags. Accepting an after-sale return needs one of these address ids.
- `get_aftersale_order` — Get one after-sale order by its id, including its status, type, products, and refund details.
- `get_category` — Get the publishing rules of one leaf category: required product and sale attributes, brand restrictions, deposit, and qualifications.
- `get_freight_template` — Get one freight template by template_id, including its valuation type, shipping method, sender address, and freight rules. Freight templates bind to products through expressInfo on add_product.
- `get_order` — Get one order by order_id, including its products, payment, price, and delivery details. Buyer address fields are masked.
- `get_product` — Get one product by product_id. Products keep a draft and an online copy; dataType selects which.
- `get_shop_info` — Get the basic information of the connected WeChat Store: name, avatar, subject type, and status.
- `list_addresses` — List the merchant address ids of the store. After-sale returns need one of these address ids when accepting a return.
- `list_aftersale_orders` — List the after-sale order ids of the store, paginated by cursor. At least one time range pair is required, as Unix timestamps in seconds spanning at most 24 hours.
- `list_categories` — Get the full category tree of the store, including the qualifications each category requires. Use the leaf cat_id values from cats_v2 for add_product and get_category.
- `list_delivery_companies` — List the delivery companies the store can ship with, including each company's delivery_id.
- `list_freight_templates` — List the freight template ids of the store.
- `list_orders` — List the order ids of the store, paginated by cursor. At least one time range is required, as a pair of Unix timestamps in seconds spanning at most 7 days.
- `list_products` — List the product ids of the store, paginated by cursor.
- `list_valid_brands` — List the brand qualifications currently in effect for the store, paginated by cursor. Use a returned brand_id when adding a product in a brand-restricted category.
- `listing_product` — Submit a product for review and list it once approved. [write]
- `reject_aftersale` — Reject a buyer's after-sale request with a reason. [write]
- `send_delivery` — Ship an order, in one or more packages. Each package either ships by express with a waybill (deliverType 1, needs waybillId and deliveryId from list_delivery_companies, or OTHER when the company is not listed) or delivers virtual goods without logistics (deliverType 3, only for orders whose products use the phone-number delivery method). [write]
- `update_order_merchant_notes` — Replace the merchant note of one order, optionally with a tag color. [write]
- `update_product` — Replace a product's editable data. This is a full overwrite: every field of add_product applies, SKUs that carry an existing sku_id are updated, SKUs without one are added, and previously existing SKUs missing from the list are deleted. [write]
- `update_product_stock` — Update the stock of a product's SKUs. This does not consume the product review quota. [write]
- `upload_image` — Ask WeChat to fetch and host a public image URL for use in product image fields. At most 10 MB per image. [write]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change WeChat Store state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — WeChat Store is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=weixin_store
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- WeChat Store homepage: https://channels.weixin.qq.com/shop
