---
name: oo-foursquare
description: "Foursquare (foursquare.com). Use this skill for ANY Foursquare request — searching and reading data. Whenever a task involves Foursquare, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Foursquare"
  author: "OOMOL"
  version: "1.0.0"
  service: "foursquare"
  categories: "Maps & Location, Data & Analytics"
  homepage: "https://foursquare.com"
  icon: "https://static.oomol.com/logo/third-party/Foursquare.svg"
---

# Foursquare

Operate **Foursquare** through your OOMOL-connected account. This skill calls the `foursquare` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Data & Analytics. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Foursquare. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "foursquare" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "foursquare" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_nearby_places`](actions/get_nearby_places.md) — Retrieve nearby places around a latitude and longitude with Foursquare.
- [`get_place`](actions/get_place.md) — Retrieve one place by Foursquare place ID.
- [`get_place_photos`](actions/get_place_photos.md) — Retrieve photos for one Foursquare place.
- [`get_place_tips`](actions/get_place_tips.md) — Retrieve tips for one Foursquare place.
- [`search_places`](actions/search_places.md) — Search for places with the Foursquare Places Search endpoint.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Foursquare state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Foursquare is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=foursquare
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Foursquare homepage: https://foursquare.com
