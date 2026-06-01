---
name: klazify
description: "Klazify (klazify.com). Use this skill for ANY Klazify request — searching and reading data. Whenever a task involves Klazify, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Klazify"
  author: "OOMOL"
  version: "1.0.0"
  service: "klazify"
  categories: "Data & Analytics, Marketing"
  homepage: "https://www.klazify.com"
  icon: "https://static.oomol.com/logo/third-party/klazify.svg"
---

# Klazify

Operate **Klazify** through your OOMOL-connected account. This skill calls the `klazify` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Klazify. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "klazify" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "klazify" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`categorize_url`](actions/categorize_url.md) — Categorize a website URL with Klazify and return the aggregated domain enrichment overview.
- [`get_company_data`](actions/get_company_data.md) — Return company profile data for one website URL with Klazify.
- [`get_domain_expiration`](actions/get_domain_expiration.md) — Return the registration and expiration details for one website URL with Klazify.
- [`get_domain_logo`](actions/get_domain_logo.md) — Return the hosted logo URL for one website URL with Klazify.
- [`get_iab_categories`](actions/get_iab_categories.md) — Return the IAB category classification for one website URL with Klazify.
- [`get_similar_domains`](actions/get_similar_domains.md) — Return similar or competitor domains for one website URL with Klazify.
- [`get_social_media_links`](actions/get_social_media_links.md) — Return the social media profile URLs for one website URL with Klazify.
- [`get_tech_stack`](actions/get_tech_stack.md) — Return the detected technology stack for one website URL with Klazify.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Klazify state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Klazify is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=klazify
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Klazify homepage: https://www.klazify.com
