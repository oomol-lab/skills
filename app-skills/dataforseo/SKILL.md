---
name: dataforseo
description: "DataForSEO (dataforseo.com). Use this skill for ANY DataForSEO request — searching and reading data. Whenever a task involves DataForSEO, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "DataForSEO"
  author: "OOMOL"
  version: "1.0.0"
  service: "dataforseo"
  categories: "Data & Analytics, Marketing"
  homepage: "https://dataforseo.com"
  icon: "https://static.oomol.com/logo/third-party/dataforseo.png"
---

# DataForSEO

Operate **DataForSEO** through your OOMOL-connected account. This skill calls the `dataforseo` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected DataForSEO. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "dataforseo" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "dataforseo" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`backlinks_anchors_live`](actions/backlinks_anchors_live.md) — Retrieve DataForSEO Backlinks anchor text metrics for a domain, subdomain, or page.
- [`backlinks_list_live`](actions/backlinks_list_live.md) — Retrieve DataForSEO Backlinks records for a domain, subdomain, or page.
- [`backlinks_referring_domains_live`](actions/backlinks_referring_domains_live.md) — Retrieve DataForSEO Backlinks referring domains for a domain, subdomain, or page.
- [`backlinks_summary_live`](actions/backlinks_summary_live.md) — Retrieve DataForSEO Backlinks summary metrics for a domain, subdomain, or page.
- [`get_user_data`](actions/get_user_data.md) — Retrieve DataForSEO account details, balance, rates, limits, and usage data.
- [`google_ads_search_volume_live`](actions/google_ads_search_volume_live.md) — Retrieve Google Ads search volume metrics from DataForSEO for one batch of keywords.
- [`google_domain_rank_overview_live`](actions/google_domain_rank_overview_live.md) — Retrieve DataForSEO Labs Google ranking and traffic overview for a domain.
- [`google_keyword_ideas_live`](actions/google_keyword_ideas_live.md) — Retrieve DataForSEO Labs Google keyword ideas for seed keywords.
- [`google_keyword_overview_live`](actions/google_keyword_overview_live.md) — Retrieve DataForSEO Labs Google keyword overview metrics for a batch of keywords.
- [`google_keyword_suggestions_live`](actions/google_keyword_suggestions_live.md) — Retrieve DataForSEO Labs Google keyword suggestions for one seed keyword.
- [`google_keywords_for_site_live`](actions/google_keywords_for_site_live.md) — Retrieve DataForSEO Labs Google keyword ideas relevant to a target domain.
- [`google_organic_live_advanced`](actions/google_organic_live_advanced.md) — Run a DataForSEO Google Organic SERP Live Advanced request for one search keyword.
- [`google_relevant_pages_live`](actions/google_relevant_pages_live.md) — Retrieve ranking and traffic metrics for the most relevant pages of a domain.
- [`google_serp_competitors_live`](actions/google_serp_competitors_live.md) — Retrieve domains competing in Google SERPs for the specified keywords.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change DataForSEO state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — DataForSEO is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=dataforseo
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- DataForSEO homepage: https://dataforseo.com
