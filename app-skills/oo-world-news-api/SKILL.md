---
name: oo-world-news-api
description: "World News API (worldnewsapi.com). Use this skill for ANY World News API request — searching and reading data. Whenever a task involves World News API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "World News API"
  author: "OOMOL"
  version: "1.0.0"
  service: "world_news_api"
  categories: "Data & Analytics, Social"
  homepage: "https://worldnewsapi.com"
  icon: "https://static.oomol.com/logo/third-party/world_news_api.svg"
---

# World News API

Operate **World News API** through your OOMOL-connected account. This skill calls the `world_news_api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Social. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected World News API. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "world_news_api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "world_news_api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_geo_coordinates`](actions/get_geo_coordinates.md) — Resolve a location string to latitude and longitude with World News API.
- [`get_top_news`](actions/get_top_news.md) — Retrieve top-news clusters for one source country and optional language or date filters.
- [`retrieve_news`](actions/retrieve_news.md) — Retrieve one or more articles by identifier from World News API.
- [`search_news`](actions/search_news.md) — Search news articles with World News API using the first-pass filtering subset.
- [`search_news_sources`](actions/search_news_sources.md) — Search World News API sources by name, language, or source country.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change World News API state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — World News API is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=world_news_api
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- World News API homepage: https://worldnewsapi.com
