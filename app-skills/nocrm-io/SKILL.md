---
name: nocrm-io
description: "noCRM.io (nocrm.io). Use this skill for ANY noCRM.io request — reading, creating, updating, and deleting data. Whenever a task involves noCRM.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "noCRM.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "nocrm_io"
  categories: "Marketing, Productivity"
  homepage: "https://www.nocrm.io"
  icon: "https://static.oomol.com/logo/third-party/NoCRM.io.svg"
---

# noCRM.io

Operate **noCRM.io** through your OOMOL-connected account. This skill calls the `nocrm_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Productivity. Exposes 9 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected noCRM.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "nocrm_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "nocrm_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_tag_to_lead`](actions/add_tag_to_lead.md) — Add one or more tags to a noCRM.io lead.
- [`append_to_lead_description`](actions/append_to_lead_description.md) — Append text to the description of a noCRM.io lead.
- [`assign_lead_to_user`](actions/assign_lead_to_user.md) — Assign a noCRM.io lead to a specific user.
- [`change_lead_status_to_cancelled`](actions/change_lead_status_to_cancelled.md) — Change a noCRM.io lead status to cancelled.
- [`change_lead_status_to_standby`](actions/change_lead_status_to_standby.md) — Change a noCRM.io lead to standby and schedule its next reminder.
- [`create_lead`](actions/create_lead.md) — Create a lead in noCRM.io with the provided title and description.
- [`delete_lead`](actions/delete_lead.md) — Delete a noCRM.io lead.
- [`duplicate_lead`](actions/duplicate_lead.md) — Duplicate an existing noCRM.io lead into another step.
- [`list_teams`](actions/list_teams.md) — List the teams available in the connected noCRM.io account.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change noCRM.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — noCRM.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=nocrm_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- noCRM.io homepage: https://www.nocrm.io
