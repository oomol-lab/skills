---
name: oo-shipengine
description: "ShipEngine (shipengine.com). Use this skill for ANY ShipEngine request — searching and reading data. Whenever a task involves ShipEngine, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ShipEngine"
  author: "OOMOL"
  version: "1.0.0"
  service: "shipengine"
  categories: "Productivity, Maps & Location"
  homepage: "https://www.shipengine.com/"
---

# ShipEngine

Operate **ShipEngine** through your OOMOL-connected account. This skill calls the `shipengine` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Maps & Location. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ShipEngine. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shipengine" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shipengine" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`calculate_rates`](actions/calculate_rates.md) — Calculate shipping rates for a shipment request using connected ShipEngine carriers.
- [`estimate_rates`](actions/estimate_rates.md) — Estimate shipping rates with basic address and package information.
- [`get_rate`](actions/get_rate.md) — Retrieve a previously queried ShipEngine rate by ID.
- [`list_carriers`](actions/list_carriers.md) — List carrier accounts connected to the ShipEngine account.
- [`parse_address`](actions/parse_address.md) — Parse unstructured text into a structured ShipEngine address.
- [`validate_addresses`](actions/validate_addresses.md) — Validate one or more mailing addresses with ShipEngine and return deliverability details.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ShipEngine state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ShipEngine is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shipengine
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ShipEngine homepage: https://www.shipengine.com/
