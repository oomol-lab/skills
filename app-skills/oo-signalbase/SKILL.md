---
name: oo-signalbase
description: "Signalbase (trysignalbase.com). Use this skill for ANY Signalbase request — searching and reading data. Whenever a task involves Signalbase, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Signalbase"
  author: "OOMOL"
  version: "1.0.0"
  service: "signalbase"
  categories: "Data & Analytics, Marketing"
  homepage: "https://www.trysignalbase.com"
---

# Signalbase

Operate **Signalbase** through your OOMOL-connected account. This skill calls the `signalbase` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Data & Analytics, Marketing. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Signalbase. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "signalbase" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "signalbase" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`list_acquisition_signals`](actions/list_acquisition_signals.md) — Fetch Signalbase acquisition signals with date, company, acquirer, amount, and sorting filters.
- [`list_companies`](actions/list_companies.md) — Browse and search Signalbase company profiles with pagination, filters, and sorting.
- [`list_funding_signals`](actions/list_funding_signals.md) — Fetch Signalbase funding signals with date, company, investor, amount, and sorting filters.
- [`list_hiring_signals`](actions/list_hiring_signals.md) — Fetch Signalbase hiring signals with role, department, seniority, location, and sorting filters.
- [`list_investors`](actions/list_investors.md) — Fetch Signalbase investor data with type, location, ticket-size, and sorting filters.
- [`list_job_change_signals`](actions/list_job_change_signals.md) — Fetch Signalbase job-change signals with person, role, company, LinkedIn, and sorting filters.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Signalbase state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Signalbase is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=signalbase
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Signalbase homepage: https://www.trysignalbase.com
