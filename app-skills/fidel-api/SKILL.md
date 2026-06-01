---
name: fidel-api
description: "Fidel API (fidel.uk). Use this skill for ANY Fidel API request — searching and reading data. Whenever a task involves Fidel API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Fidel API"
  author: "OOMOL"
  version: "1.0.0"
  service: "fidel_api"
  categories: "Finance, Data & Analytics"
  homepage: "https://fidel.uk"
  icon: "https://static.oomol.com/logo/third-party/flowiseai.jpg"
---

# Fidel API

Operate **Fidel API** through your OOMOL-connected account. This skill calls the `fidel_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Fidel API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "fidel_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "fidel_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_brand`](actions/get_brand.md) — Fetch one Fidel brand by brand ID.
- [`get_card`](actions/get_card.md) — Fetch one Fidel card by card ID.
- [`get_transaction`](actions/get_transaction.md) — Fetch one Fidel transaction by transaction ID.
- [`list_brands`](actions/list_brands.md) — List Fidel brands available to the connected secret API key.
- [`list_cards`](actions/list_cards.md) — List Fidel cards for one program ID.
- [`list_transactions`](actions/list_transactions.md) — List Fidel transactions for one program ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Fidel API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Fidel API is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=fidel_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Fidel API homepage: https://fidel.uk
