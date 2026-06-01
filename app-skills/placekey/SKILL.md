---
name: placekey
description: "Placekey (placekey.io). Use this skill for ANY Placekey request — searching and reading data. Whenever a task involves Placekey, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Placekey"
  author: "OOMOL"
  version: "1.0.0"
  service: "placekey"
  categories: "Maps & Location, Data & Analytics"
  homepage: "https://www.placekey.io"
  icon: "https://static.oomol.com/logo/third-party/Placekey.svg"
---

# Placekey

Operate **Placekey** through your OOMOL-connected account. This skill calls the `placekey` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Data & Analytics. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Placekey. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "placekey" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "placekey" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_geocode_from_address`](actions/get_geocode_from_address.md) — Resolve a postal address with Placekey and return the matched geocode response for the location.
- [`get_placekey`](actions/get_placekey.md) — Look up a single location with Placekey and return its Placekey identifier plus optional enrichment fields.
- [`get_placekey_from_address`](actions/get_placekey_from_address.md) — Resolve a postal address into a Placekey identifier using the Placekey single-lookup API.
- [`get_placekeys_bulk`](actions/get_placekeys_bulk.md) — Look up up to 100 locations in one Placekey bulk request and return the result for each query item.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Placekey state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Placekey is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=placekey
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Placekey homepage: https://www.placekey.io
