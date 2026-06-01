---
name: opengraph-io
description: "OpenGraph.io (opengraph.io). Use this skill for ANY OpenGraph.io request — searching and reading data. Whenever a task involves OpenGraph.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OpenGraph.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "opengraph_io"
  categories: "Data & Analytics, Developer Tools"
  homepage: "https://www.opengraph.io"
  icon: "https://static.oomol.com/logo/third-party/OpenGraph.io.svg"
---

# OpenGraph.io

Operate **OpenGraph.io** through your OOMOL-connected account. This skill calls the `opengraph_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Developer Tools. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected OpenGraph.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "opengraph_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "opengraph_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`capture_screenshot`](actions/capture_screenshot.md) — Capture a webpage screenshot through the OpenGraph.io Screenshot endpoint with configurable viewport, delay, and element selection.
- [`extract_site`](actions/extract_site.md) — Extract Open Graph, Twitter Card, oEmbed, and inferred metadata for a site through the OpenGraph.io Site endpoint.
- [`scrape_site`](actions/scrape_site.md) — Retrieve a site's metadata through the OpenGraph.io Site endpoint with cache, proxy, render, and retry controls.
- [`scrape_url`](actions/scrape_url.md) — Fetch the raw HTML for a page through the OpenGraph.io Scrape endpoint with optional render and proxy controls.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change OpenGraph.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — OpenGraph.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=opengraph_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- OpenGraph.io homepage: https://www.opengraph.io
