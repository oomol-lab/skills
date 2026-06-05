---
name: oo-tomba
description: "Tomba (tomba.io). Use this skill for ANY Tomba request — searching and reading data. Whenever a task involves Tomba, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Tomba"
  author: "OOMOL"
  version: "1.0.0"
  service: "tomba"
  categories: "Marketing, Data & Analytics"
  homepage: "https://tomba.io"
---

# Tomba

Operate **Tomba** through your OOMOL-connected account. This skill calls the `tomba` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 10 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Tomba. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "tomba" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "tomba" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`domain_search`](actions/domain_search.md) — Search for email addresses and company intelligence for a domain.
- [`email_count`](actions/email_count.md) — Count known email addresses and related breakdowns for a domain.
- [`email_finder`](actions/email_finder.md) — Find the most likely professional email address for a person at a domain.
- [`email_sources`](actions/email_sources.md) — Retrieve public source URLs where Tomba found an email address.
- [`email_verifier`](actions/email_verifier.md) — Verify deliverability and metadata for an email address.
- [`enrich`](actions/enrich.md) — Enrich a known email address with person and company attributes.
- [`get_account`](actions/get_account.md) — Retrieve information about the authenticated Tomba account.
- [`linkedin`](actions/linkedin.md) — Find contact data associated with a public LinkedIn profile URL.
- [`search_companies`](actions/search_companies.md) — Search companies with Tomba Reveal using a natural-language query or filters.
- [`technology`](actions/technology.md) — Detect technologies and tools used by a company domain.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Tomba state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Tomba is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=tomba
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Tomba homepage: https://tomba.io
