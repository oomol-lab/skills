---
name: aviationstack
description: "Aviationstack (aviationstack.com). Use this skill for ANY Aviationstack request — searching and reading data. Whenever a task involves Aviationstack, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Aviationstack"
  author: "OOMOL"
  version: "1.0.0"
  service: "aviationstack"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://aviationstack.com/"
  icon: "https://static.oomol.com/logo/third-party/aviationstack.png"
---

# Aviationstack

Operate **Aviationstack** through your OOMOL-connected account. This skill calls the `aviationstack` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Aviationstack. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "aviationstack" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "aviationstack" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`list_aircraft_types`](actions/list_aircraft_types.md) — List or search Aviationstack aircraft types with pagination.
- [`list_airlines`](actions/list_airlines.md) — List or search Aviationstack airlines with pagination.
- [`list_airplanes`](actions/list_airplanes.md) — List or search Aviationstack airplanes with pagination.
- [`list_airports`](actions/list_airports.md) — List or search Aviationstack airports with pagination.
- [`list_cities`](actions/list_cities.md) — List or search Aviationstack cities with pagination.
- [`list_countries`](actions/list_countries.md) — List or search Aviationstack countries with pagination.
- [`list_taxes`](actions/list_taxes.md) — List or search Aviationstack aviation taxes with pagination.
- [`search_flights`](actions/search_flights.md) — Search real-time or recent historical Aviationstack flights with optional filters.
- [`search_routes`](actions/search_routes.md) — Search Aviationstack airline routes with airport, airline, flight, and pagination filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Aviationstack state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Aviationstack is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=aviationstack
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Aviationstack homepage: https://aviationstack.com/
