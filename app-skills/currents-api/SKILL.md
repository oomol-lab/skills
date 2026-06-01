---
name: currents-api
description: "Currents API (currentsapi.services). Use this skill for ANY Currents API request — searching and reading data. Whenever a task involves Currents API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Currents API"
  author: "OOMOL"
  version: "1.0.0"
  service: "currents_api"
  categories: "Data & Analytics, Social"
  homepage: "https://currentsapi.services"
  icon: "https://static.oomol.com/logo/third-party/Currents%20API.svg"
---

# Currents API

Operate **Currents API** through your OOMOL-connected account. This skill calls the `currents_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Social. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Currents API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "currents_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "currents_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_latest_news`](actions/get_latest_news.md) — Retrieve the latest Currents news feed with optional language and region filters.
- [`list_available_categories`](actions/list_available_categories.md) — List the news categories currently supported by Currents.
- [`list_available_languages`](actions/list_available_languages.md) — List the language codes currently supported by Currents.
- [`list_available_regions`](actions/list_available_regions.md) — List the region codes currently supported by Currents.
- [`search_news`](actions/search_news.md) — Search Currents news articles with keyword, taxonomy, and time-range filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Currents API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Currents API is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=currents_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Currents API homepage: https://currentsapi.services
