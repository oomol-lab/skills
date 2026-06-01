---
name: jobnimbus
description: "JobNimbus (jobnimbus.com). Use this skill for ANY JobNimbus request — reading, creating, and updating data. Whenever a task involves JobNimbus, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "JobNimbus"
  author: "OOMOL"
  version: "1.0.0"
  service: "jobnimbus"
  categories: "Productivity, Marketing"
  homepage: "https://www.jobnimbus.com"
---

# JobNimbus

Operate **JobNimbus** through your OOMOL-connected account. This skill calls the `jobnimbus` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected JobNimbus. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "jobnimbus" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "jobnimbus" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create one JobNimbus contact from a raw contact payload, with optional actor, bulk, and skip controls.
- [`create_job`](actions/create_job.md) — Create one JobNimbus job from a raw job payload, with optional actor, bulk, and skip controls.
- [`get_contact`](actions/get_contact.md) — Get one JobNimbus contact by ID.
- [`get_job`](actions/get_job.md) — Get one JobNimbus job by ID.
- [`list_contacts`](actions/list_contacts.md) — List JobNimbus contacts with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options.
- [`list_jobs`](actions/list_jobs.md) — List JobNimbus jobs with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options.
- [`update_contact`](actions/update_contact.md) — Update one JobNimbus contact by ID from a raw contact payload, with optional actor, bulk, and skip controls.
- [`update_job`](actions/update_job.md) — Update one JobNimbus job by ID from a raw job payload, with optional actor, bulk, and skip controls.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change JobNimbus state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — JobNimbus is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=jobnimbus
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- JobNimbus homepage: https://www.jobnimbus.com
