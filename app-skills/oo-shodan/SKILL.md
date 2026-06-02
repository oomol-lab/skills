---
name: oo-shodan
description: "Shodan (shodan.io). Use this skill for ANY Shodan request — searching and reading data. Whenever a task involves Shodan, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Shodan"
  author: "OOMOL"
  version: "1.0.0"
  service: "shodan"
  categories: "Security & Identity, Data & Analytics"
  homepage: "https://www.shodan.io"
  icon: "https://static.oomol.com/logo/third-party/shodan.png"
---

# Shodan

Operate **Shodan** through your OOMOL-connected account. This skill calls the `shodan` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Shodan. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "shodan" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "shodan" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`count_search_results`](actions/count_search_results.md) — Count Shodan hosts matching a query and optionally return facet aggregations.
- [`get_api_info`](actions/get_api_info.md) — Get API account information and remaining credits from Shodan.
- [`get_domain_info`](actions/get_domain_info.md) — Get DNS domain information and known subdomains from Shodan.
- [`get_host`](actions/get_host.md) — Get Shodan host details for one IP address.
- [`resolve_hostnames`](actions/resolve_hostnames.md) — Resolve hostnames to IP addresses with the Shodan DNS resolve endpoint.
- [`reverse_dns_lookup`](actions/reverse_dns_lookup.md) — Reverse-resolve IP addresses to hostnames with the Shodan DNS reverse endpoint.
- [`search_hosts`](actions/search_hosts.md) — Search Shodan hosts with a query string and optional facet aggregation.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Shodan state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Shodan is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=shodan
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Shodan homepage: https://www.shodan.io
