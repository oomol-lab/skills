---
name: apiverve
description: "APIVerve (apiverve.com). Use this skill for ANY APIVerve request — searching and reading data. Whenever a task involves APIVerve, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "APIVerve"
  author: "OOMOL"
  version: "1.0.0"
  service: "apiverve"
  categories: "Developer Tools, Data & Analytics"
  homepage: "https://apiverve.com/"
  icon: "https://static.oomol.com/logo/third-party/Apiverve.svg"
---

# APIVerve

Operate **APIVerve** through your OOMOL-connected account. This skill calls the `apiverve` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected APIVerve. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "apiverve" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "apiverve" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`calculate_age`](actions/calculate_age.md) — Calculate age details from a date of birth using APIVerve Age Calculator.
- [`convert_currency`](actions/convert_currency.md) — Convert an amount between currencies using APIVerve Currency Converter.
- [`find_antonyms`](actions/find_antonyms.md) — Find antonyms for a word using APIVerve Antonym Finder.
- [`generate_advice`](actions/generate_advice.md) — Generate a random piece of advice using APIVerve Advice Generator.
- [`get_air_quality`](actions/get_air_quality.md) — Get current air quality by city or ZIP code using APIVerve Air Quality.
- [`get_airport_distance`](actions/get_airport_distance.md) — Get distance and flight estimates between two airports using IATA codes.
- [`get_word_definition`](actions/get_word_definition.md) — Get definitions for a word using APIVerve Dictionary.
- [`lookup_airlines`](actions/lookup_airlines.md) — Look up airlines by name or IATA code using APIVerve Airline Lookup.
- [`lookup_airport`](actions/lookup_airport.md) — Look up airport information by IATA code using APIVerve Airports Lookup.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change APIVerve state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — APIVerve is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=apiverve
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- APIVerve homepage: https://apiverve.com/
