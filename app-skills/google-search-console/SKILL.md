---
name: google-search-console
description: "Google Search Console (search.google.com). Use this skill for ANY Google Search Console request — reading, creating, updating, and deleting data. Whenever a task involves Google Search Console, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Search Console"
  author: "OOMOL"
  version: "1.0.0"
  service: "google_search_console"
  categories: "Data & Analytics, Marketing"
  homepage: "https://search.google.com/search-console"
  icon: "https://static.oomol.com/logo/third-party/google_search_console.svg"
---

# Google Search Console

Operate **Google Search Console** through your OOMOL-connected account. This skill calls the `google_search_console` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Search Console. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "google_search_console" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "google_search_console" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_site`](actions/add_site.md) — Add a property to the connected account's Search Console site set.
- [`delete_site`](actions/delete_site.md) — Remove a property from the connected account's Search Console site set.
- [`delete_sitemap`](actions/delete_sitemap.md) — Delete a sitemap from a Search Console property.
- [`get_site`](actions/get_site.md) — Fetch one Search Console property and the current account permission level.
- [`get_sitemap`](actions/get_sitemap.md) — Fetch one Search Console sitemap by property URL and sitemap URL.
- [`inspect_url`](actions/inspect_url.md) — Inspect the indexed status of a URL under a Search Console property using Google's URL Inspection API.
- [`list_sitemaps`](actions/list_sitemaps.md) — List sitemaps submitted for a Search Console property.
- [`list_sites`](actions/list_sites.md) — List Search Console properties visible to the connected Google account.
- [`query_search_analytics`](actions/query_search_analytics.md) — Query Search Console performance data for a property across dates, dimensions, filters, and search types.
- [`submit_sitemap`](actions/submit_sitemap.md) — Submit a sitemap URL for a Search Console property.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Search Console state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Search Console is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=google_search_console
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Search Console homepage: https://search.google.com/search-console
