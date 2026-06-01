---
name: peopledatalabs
description: "People Data Labs (peopledatalabs.com). Use this skill for ANY People Data Labs request — searching and reading data. Whenever a task involves People Data Labs, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "People Data Labs"
  author: "OOMOL"
  version: "1.0.0"
  service: "peopledatalabs"
  categories: "Data & Analytics, Marketing"
  homepage: "https://www.peopledatalabs.com"
  icon: "https://static.oomol.com/logo/third-party/peopledatalabs.png"
---

# People Data Labs

Operate **People Data Labs** through your OOMOL-connected account. This skill calls the `peopledatalabs` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 4 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected People Data Labs. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "peopledatalabs" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "peopledatalabs" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`enrich_company`](actions/enrich_company.md) — Match a single company in People Data Labs and return the top matched company record.
- [`enrich_person`](actions/enrich_person.md) — Match a single person in People Data Labs and return the top matched person record.
- [`search_companies`](actions/search_companies.md) — Search the People Data Labs company dataset with either an Elasticsearch query or SQL query.
- [`search_people`](actions/search_people.md) — Search the People Data Labs person dataset with either an Elasticsearch query or SQL query.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change People Data Labs state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — People Data Labs is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=peopledatalabs
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- People Data Labs homepage: https://www.peopledatalabs.com
