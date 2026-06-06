---
name: oo-shipday
description: "Shipday (shipday.com). Use this skill for ANY Shipday request — reading, creating, updating, and deleting data. Whenever a task involves Shipday, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Shipday"
  author: "OOMOL"
  version: "1.0.0"
  service: "shipday"
  categories: "Productivity, Maps & Location"
  homepage: "https://www.shipday.com/"
---

# Shipday

Operate **Shipday** through your OOMOL-connected account. This skill calls the `shipday` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Maps & Location. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Shipday. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shipday" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shipday" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_order`](actions/create_order.md) — Insert a Shipday delivery order.
- [`delete_order`](actions/delete_order.md) — Delete a Shipday delivery order by order ID.
- [`edit_order`](actions/edit_order.md) — Edit an existing Shipday delivery order.
- [`get_order`](actions/get_order.md) — Retrieve one Shipday delivery order by order number.
- [`get_order_progress`](actions/get_order_progress.md) — Retrieve real-time delivery progress and ETA for a Shipday order.
- [`list_active_orders`](actions/list_active_orders.md) — Retrieve active delivery orders from Shipday.
- [`list_carriers`](actions/list_carriers.md) — Retrieve carriers configured in Shipday.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Shipday state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Shipday is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shipday
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Shipday homepage: https://www.shipday.com/
