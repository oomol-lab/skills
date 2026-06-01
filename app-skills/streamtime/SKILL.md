---
name: streamtime
description: "Streamtime (streamtime.net). Use this skill for ANY Streamtime request — reading, creating, and updating data. Whenever a task involves Streamtime, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Streamtime"
  author: "OOMOL"
  version: "1.0.0"
  service: "streamtime"
  categories: "Productivity, Finance"
  homepage: "https://www.streamtime.net"
  icon: "https://static.oomol.com/logo/third-party/streamtime.svg"
---

# Streamtime

Operate **Streamtime** through your OOMOL-connected account. This skill calls the `streamtime` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Finance. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Streamtime. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "streamtime" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "streamtime" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_company`](actions/create_company.md) — Create a company in Streamtime for the authenticated organisation.
- [`create_company_contact`](actions/create_company_contact.md) — Create a contact under a Streamtime company.
- [`create_job`](actions/create_job.md) — Create a Streamtime job linked to a company, rate card, and optional contact.
- [`get_company`](actions/get_company.md) — Get a Streamtime company by ID.
- [`get_contact`](actions/get_contact.md) — Get a Streamtime contact by ID.
- [`get_job`](actions/get_job.md) — Get a Streamtime job by ID.
- [`get_organisation`](actions/get_organisation.md) — Get the authenticated Streamtime organisation details.
- [`list_branches`](actions/list_branches.md) — List the Streamtime branches available to the authenticated organisation.
- [`list_company_contacts`](actions/list_company_contacts.md) — List the contacts that belong to a Streamtime company.
- [`list_rate_cards`](actions/list_rate_cards.md) — List the Streamtime rate cards available to the authenticated organisation.
- [`list_users`](actions/list_users.md) — List the Streamtime users available to the authenticated organisation.
- [`update_company`](actions/update_company.md) — Update a Streamtime company by ID.
- [`update_contact`](actions/update_contact.md) — Update a Streamtime contact by ID.
- [`update_job`](actions/update_job.md) — Update a Streamtime job by ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Streamtime state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Streamtime is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=streamtime
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Streamtime homepage: https://www.streamtime.net
