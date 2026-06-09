---
name: oo-scrape-do
description: "Scrape.do (scrape.do). Use this skill for ANY Scrape.do request — searching and reading data. Whenever a task involves Scrape.do, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Scrape.do"
  author: "OOMOL"
  version: "1.0.0"
  service: "scrape_do"
  categories: "Developer Tools, Data & Analytics"
  homepage: "https://scrape.do"
---

# Scrape.do

Operate **Scrape.do** through your OOMOL-connected account. This skill calls the `scrape_do` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools, Data & Analytics. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Scrape.do. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "scrape_do" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "scrape_do" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`fetch_html`](actions/fetch_html.md) — Fetch one public URL through Scrape.do and return the synchronous response body.
- [`fetch_json`](actions/fetch_json.md) — Fetch one public URL through Scrape.do returnJSON mode and return the parsed JSON payload.
- [`get_account_info`](actions/get_account_info.md) — Retrieve Scrape.do account information and usage counters for the API token.
- [`take_screenshot`](actions/take_screenshot.md) — Render one public URL through Scrape.do and return a screenshot as base64.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Scrape.do state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Scrape.do is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=scrape_do
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Scrape.do homepage: https://scrape.do
