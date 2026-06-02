---
name: oo-companyenrich
description: "CompanyEnrich (companyenrich.com). Use this skill for ANY CompanyEnrich request — searching and reading data. Whenever a task involves CompanyEnrich, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "CompanyEnrich"
  author: "OOMOL"
  version: "1.0.0"
  service: "companyenrich"
  categories: "Marketing, Data & Analytics"
  homepage: "https://companyenrich.com"
  icon: "https://static.oomol.com/logo/third-party/Companyenrich.svg"
---

# CompanyEnrich

Operate **CompanyEnrich** through your OOMOL-connected account. This skill calls the `companyenrich` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected CompanyEnrich. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "companyenrich" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "companyenrich" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`count_companies`](actions/count_companies.md) — Count how many companies match the provided CompanyEnrich search filters.
- [`enrich_company_by_domain`](actions/enrich_company_by_domain.md) — Enrich a company profile from its primary domain.
- [`enrich_company_by_properties`](actions/enrich_company_by_properties.md) — Enrich a company profile from identifying company properties.
- [`find_similar_companies`](actions/find_similar_companies.md) — Find companies similar to one or more seed company domains.
- [`get_current_user`](actions/get_current_user.md) — Get the authenticated CompanyEnrich user summary and remaining capabilities.
- [`search_companies`](actions/search_companies.md) — Search CompanyEnrich companies with page-based filters and pagination.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change CompanyEnrich state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — CompanyEnrich is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=companyenrich
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- CompanyEnrich homepage: https://companyenrich.com
