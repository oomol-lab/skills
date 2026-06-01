---
name: elorus
description: "Elorus (elorus.com). Use this skill for ANY Elorus request — reading, creating, and updating data. Whenever a task involves Elorus, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Elorus"
  author: "OOMOL"
  version: "1.0.0"
  service: "elorus"
  categories: "Finance, Productivity"
  homepage: "https://www.elorus.com/"
  icon: "https://static.oomol.com/logo/third-party/elorus.svg"
---

# Elorus

Operate **Elorus** through your OOMOL-connected account. This skill calls the `elorus` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Productivity. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Elorus. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "elorus" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "elorus" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create one Elorus contact in the selected organization.
- [`create_invoice`](actions/create_invoice.md) — Create one Elorus invoice in the selected organization.
- [`create_product`](actions/create_product.md) — Create one Elorus product or service in the selected organization.
- [`get_contact`](actions/get_contact.md) — Get one Elorus contact by ID.
- [`get_invoice`](actions/get_invoice.md) — Get one Elorus invoice by ID.
- [`get_product`](actions/get_product.md) — Get one Elorus product or service by ID.
- [`list_contacts`](actions/list_contacts.md) — List Elorus contacts with optional search, filters, and pagination.
- [`list_invoices`](actions/list_invoices.md) — List Elorus invoices with optional filters and pagination.
- [`list_products`](actions/list_products.md) — List Elorus products or services with optional filters and pagination.
- [`update_contact`](actions/update_contact.md) — Update one Elorus contact by ID.
- [`update_invoice`](actions/update_invoice.md) — Update one Elorus invoice by ID using the official full-update endpoint.
- [`update_product`](actions/update_product.md) — Update one Elorus product or service by ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Elorus state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Elorus is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=elorus
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Elorus homepage: https://www.elorus.com/
