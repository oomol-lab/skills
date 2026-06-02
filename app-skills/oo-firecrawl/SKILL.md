---
name: oo-firecrawl
description: "Firecrawl (firecrawl.dev). Use this skill for ANY Firecrawl request — reading, creating, updating, and deleting data. Whenever a task involves Firecrawl, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Firecrawl"
  author: "OOMOL"
  version: "1.0.0"
  service: "firecrawl"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://www.firecrawl.dev"
  icon: "https://static.oomol.com/logo/third-party/Firecrawl.svg"
---

# Firecrawl

Operate **Firecrawl** through your OOMOL-connected account. This skill calls the `firecrawl` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 30 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Firecrawl. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "firecrawl" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "firecrawl" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`agent_cancel`](actions/agent_cancel.md) — Cancel a running Firecrawl agent job by job ID.
- [`batch_scrape`](actions/batch_scrape.md) — Start a Firecrawl batch scrape job for multiple URLs and return the async job ID.
- [`batch_scrape_cancel`](actions/batch_scrape_cancel.md) — Cancel a running Firecrawl batch scrape job by job ID.
- [`batch_scrape_get`](actions/batch_scrape_get.md) — Get the current status and paged results of a Firecrawl batch scrape job by job ID.
- [`batch_scrape_get_errors`](actions/batch_scrape_get_errors.md) — Get the failed URLs and robots.txt blocks from a Firecrawl batch scrape job.
- [`crawl`](actions/crawl.md) — Start a Firecrawl crawl job with compatibility fields accepted from the Composio crawl action.
- [`crawl_cancel`](actions/crawl_cancel.md) — Cancel a running Firecrawl crawl job by job ID.
- [`crawl_delete`](actions/crawl_delete.md) — Compatibility alias of crawl_cancel for the Composio FIRECRAWL_CRAWL_DELETE action.
- [`crawl_get`](actions/crawl_get.md) — Get the current status and paged results of a Firecrawl crawl job by job ID.
- [`crawl_get_errors`](actions/crawl_get_errors.md) — Get the failed URLs and robots.txt blocks from a Firecrawl crawl job.
- [`crawl_list_active`](actions/crawl_list_active.md) — List the currently active Firecrawl crawl jobs for the authenticated team.
- [`crawl_params_preview`](actions/crawl_params_preview.md) — Preview the crawl parameters that Firecrawl would infer from a URL and prompt before starting the crawl.
- [`crawl_v2`](actions/crawl_v2.md) — Start a Firecrawl crawl job with the official v2 crawl fields, including prompt-driven options generation.
- [`credit_usage_get`](actions/credit_usage_get.md) — Get the authenticated Firecrawl team's current credit usage summary.
- [`credit_usage_get_historical`](actions/credit_usage_get_historical.md) — Get the authenticated Firecrawl team's historical credit usage summary.
- [`deep_research`](actions/deep_research.md) — Start a Firecrawl deep research job. This endpoint remains alpha and Firecrawl currently documents it outside the main v2 endpoint set.
- [`extract`](actions/extract.md) — Start a Firecrawl extract job that returns structured data for one or more URLs.
- [`extract_get`](actions/extract_get.md) — Get the current status and output of a Firecrawl extract job by job ID.
- [`get_agent_status`](actions/get_agent_status.md) — Get the current status and output of a Firecrawl agent job by job ID.
- [`get_deep_research_status`](actions/get_deep_research_status.md) — Get the current status and output of a Firecrawl deep research job by job ID.
- [`get_the_status_of_a_crawl_job`](actions/get_the_status_of_a_crawl_job.md) — Compatibility alias of crawl_get for the Composio FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB action.
- [`llms_txt_generate`](actions/llms_txt_generate.md) — Start an LLMs.txt generation job for a website. This endpoint remains outside the main v2 endpoint set in Firecrawl's docs.
- [`llms_txt_get`](actions/llms_txt_get.md) — Get the current status and generated content of an LLMs.txt job by job ID.
- [`map_multiple_urls_based_on_options`](actions/map_multiple_urls_based_on_options.md) — Discover URLs from a website with Firecrawl's map endpoint using the Composio-compatible action name.
- [`queue_get`](actions/queue_get.md) — Get the authenticated Firecrawl team's queue status and concurrency information.
- [`scrape`](actions/scrape.md) — Scrape a single URL with Firecrawl and return the extracted page content in the requested formats.
- [`search`](actions/search.md) — Search the web with Firecrawl and optionally scrape the top results in the requested formats.
- [`start_agent`](actions/start_agent.md) — Start a Firecrawl agent job for multi-page autonomous browsing and extraction.
- [`token_usage_get`](actions/token_usage_get.md) — Get the authenticated Firecrawl team's current token usage summary.
- [`token_usage_get_historical`](actions/token_usage_get_historical.md) — Get the authenticated Firecrawl team's historical token usage summary.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Firecrawl state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Firecrawl is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=firecrawl
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Firecrawl homepage: https://www.firecrawl.dev
