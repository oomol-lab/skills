---
name: oo-headout
description: "Headout (headout.com). Use this skill for ANY Headout request — searching and reading data. Whenever a task involves Headout, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Headout"
  author: "OOMOL"
  version: "1.0.0"
  service: "headout"
  categories: "Productivity, Data & Analytics"
  homepage: "https://www.headout.com"
  icon: "https://static.oomol.com/logo/third-party/headout.png"
---

# Headout

Operate **Headout** through your OOMOL-connected account. This skill calls the `headout` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Headout. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "headout" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "headout" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_booking`](actions/get_booking.md) — Get one booking by its Headout booking id.
- [`get_product`](actions/get_product.md) — Get one Headout product with variants and pricing.
- [`list_bookings`](actions/list_bookings.md) — List bookings accessible to the current Headout API key.
- [`list_categories_by_city`](actions/list_categories_by_city.md) — List Headout categories for a given city.
- [`list_cities`](actions/list_cities.md) — List active Headout cities.
- [`list_inventory_by_variant`](actions/list_inventory_by_variant.md) — List Headout inventory rows for one variant.
- [`list_products_by_category`](actions/list_products_by_category.md) — List Headout product listings for a category.
- [`list_products_by_city`](actions/list_products_by_city.md) — List Headout product listings for a city.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Headout state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Headout is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=headout
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Headout homepage: https://www.headout.com
