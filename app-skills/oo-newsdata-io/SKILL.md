---
name: oo-newsdata-io
description: "NewsData.io (newsdata.io). Use this skill for ANY NewsData.io request — searching and reading data. Whenever a task involves NewsData.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "NewsData.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "newsdata_io"
  categories: "Data & Analytics, Social"
  homepage: "https://newsdata.io"
---

# NewsData.io

Operate **NewsData.io** through your OOMOL-connected account. This skill calls the `newsdata_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Social. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected NewsData.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "newsdata_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "newsdata_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`get_latest_news`](actions/get_latest_news.md) — Retrieve the latest and breaking news from NewsData.io with optional filters.
- [`list_crypto_news`](actions/list_crypto_news.md) — Retrieve cryptocurrency-related news articles from NewsData.io.
- [`list_news_sources`](actions/list_news_sources.md) — List NewsData.io source domains with optional country, category, and language filters.
- [`search_news_archive`](actions/search_news_archive.md) — Search historical NewsData.io archive articles with keyword, taxonomy, and date filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change NewsData.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — NewsData.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=newsdata_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- NewsData.io homepage: https://newsdata.io
