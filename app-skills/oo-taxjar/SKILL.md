---
name: oo-taxjar
description: "TaxJar (taxjar.com). Use this skill for ANY TaxJar request — reading, creating, updating, and deleting data. Whenever a task involves TaxJar, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "TaxJar"
  author: "OOMOL"
  version: "1.0.0"
  service: "taxjar"
  categories: "Finance, Data & Analytics"
  homepage: "https://www.taxjar.com/"
  icon: "https://static.oomol.com/logo/third-party/Taxjar.svg"
---

# TaxJar

Operate **TaxJar** through your OOMOL-connected account. This skill calls the `taxjar` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 21 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected TaxJar. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "taxjar" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "taxjar" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`calculate_sales_tax_for_order`](actions/calculate_sales_tax_for_order.md) — Calculate TaxJar sales tax for an order.
- [`create_customer`](actions/create_customer.md) — Create a TaxJar customer for exemption management.
- [`create_order_transaction`](actions/create_order_transaction.md) — Create a TaxJar order transaction for reporting and filing.
- [`create_refund_transaction`](actions/create_refund_transaction.md) — Create a TaxJar refund transaction.
- [`delete_customer`](actions/delete_customer.md) — Delete a TaxJar customer by identifier.
- [`delete_order_transaction`](actions/delete_order_transaction.md) — Delete a TaxJar order transaction by identifier.
- [`delete_refund_transaction`](actions/delete_refund_transaction.md) — Delete a TaxJar refund transaction by identifier.
- [`list_customers`](actions/list_customers.md) — List TaxJar customer identifiers.
- [`list_nexus_regions`](actions/list_nexus_regions.md) — List TaxJar nexus regions for the account.
- [`list_order_transactions`](actions/list_order_transactions.md) — List TaxJar order transaction identifiers within a date range.
- [`list_refund_transactions`](actions/list_refund_transactions.md) — List TaxJar refund transaction identifiers within a date range.
- [`list_tax_categories`](actions/list_tax_categories.md) — List TaxJar product tax categories and codes.
- [`show_customer`](actions/show_customer.md) — Retrieve a TaxJar customer by identifier.
- [`show_order_transaction`](actions/show_order_transaction.md) — Retrieve a TaxJar order transaction by identifier.
- [`show_refund_transaction`](actions/show_refund_transaction.md) — Retrieve a TaxJar refund transaction by identifier.
- [`show_tax_rates_for_location`](actions/show_tax_rates_for_location.md) — Retrieve TaxJar sales tax rates for a location.
- [`summarize_tax_rates_for_all_regions`](actions/summarize_tax_rates_for_all_regions.md) — Retrieve TaxJar minimum and average sales tax rates by region.
- [`update_customer`](actions/update_customer.md) — Update an existing TaxJar customer.
- [`update_order_transaction`](actions/update_order_transaction.md) — Update an existing TaxJar order transaction.
- [`update_refund_transaction`](actions/update_refund_transaction.md) — Update an existing TaxJar refund transaction.
- [`validate_vat_number`](actions/validate_vat_number.md) — Validate a VAT identification number with TaxJar.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change TaxJar state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — TaxJar is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=taxjar
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- TaxJar homepage: https://www.taxjar.com/
