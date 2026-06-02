---
name: oo-prerender
description: "Prerender (prerender.io). Use this skill for ANY Prerender request — reading, creating, updating, and deleting data. Whenever a task involves Prerender, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Prerender"
  author: "OOMOL"
  version: "1.0.0"
  service: "prerender"
  categories: "Marketing, Developer Tools"
  homepage: "https://prerender.io"
  icon: "https://static.oomol.com/logo/third-party/prerender.svg"
---

# Prerender

Operate **Prerender** through your OOMOL-connected account. This skill calls the `prerender` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Developer Tools. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Prerender. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "prerender" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "prerender" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_sitemap`](actions/add_sitemap.md) — Submit a sitemap XML URL to Prerender so it can discover and cache new URLs from that sitemap.
- [`clear_cache`](actions/clear_cache.md) — Queue a Prerender cache clear request for URLs matching a wildcard query pattern.
- [`get_cache_clear_status`](actions/get_cache_clear_status.md) — Check whether a Prerender cache clear job is currently running for the authenticated account.
- [`recache_urls`](actions/recache_urls.md) — Queue one or more URLs for first-time caching or recaching with the Prerender recache API.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Prerender state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Prerender is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=prerender
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Prerender homepage: https://prerender.io
