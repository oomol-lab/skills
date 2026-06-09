---
name: oo-ynab
description: "YNAB (ynab.com). Use this skill for ANY YNAB request — searching and reading data. Whenever a task involves YNAB, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "YNAB"
  author: "OOMOL"
  version: "1.0.0"
  service: "ynab"
  categories: "Finance"
  homepage: "https://www.ynab.com"
---

# YNAB

Operate **YNAB** through your OOMOL-connected account. This skill calls the `ynab` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Finance. Exposes 15 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected YNAB. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ynab" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ynab" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_account`](actions/get_account.md) — Retrieve a single YNAB account.
- [`get_category`](actions/get_category.md) — Retrieve a single YNAB category.
- [`get_month`](actions/get_month.md) — Retrieve a single YNAB plan month.
- [`get_month_category`](actions/get_month_category.md) — Retrieve a YNAB category for a specific plan month.
- [`get_payee`](actions/get_payee.md) — Retrieve a single YNAB payee.
- [`get_plan`](actions/get_plan.md) — Retrieve a single YNAB plan with related entities.
- [`get_plan_settings`](actions/get_plan_settings.md) — Retrieve settings for a YNAB plan.
- [`get_transaction`](actions/get_transaction.md) — Retrieve a single YNAB transaction.
- [`get_user`](actions/get_user.md) — Retrieve the authenticated YNAB user.
- [`list_accounts`](actions/list_accounts.md) — List accounts for a YNAB plan.
- [`list_categories`](actions/list_categories.md) — List categories grouped by category group for a YNAB plan.
- [`list_months`](actions/list_months.md) — List months for a YNAB plan.
- [`list_payees`](actions/list_payees.md) — List payees for a YNAB plan.
- [`list_plans`](actions/list_plans.md) — List YNAB plans with summary information.
- [`list_transactions`](actions/list_transactions.md) — List YNAB plan transactions.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change YNAB state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — YNAB is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ynab
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- YNAB homepage: https://www.ynab.com
