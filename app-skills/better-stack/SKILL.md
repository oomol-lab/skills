---
name: better-stack
description: "Better Stack (betterstack.com). Use this skill for ANY Better Stack request — reading, creating, and updating data. Whenever a task involves Better Stack, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Better Stack"
  author: "OOMOL"
  version: "1.0.0"
  service: "better_stack"
  categories: "Developer Tools"
  homepage: "https://betterstack.com"
  icon: "https://static.oomol.com/logo/third-party/Better%20Stack.svg"
---

# Better Stack

Operate **Better Stack** through your OOMOL-connected account. This skill calls the `better_stack` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Better Stack. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "better_stack" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "better_stack" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`acknowledge_incident`](actions/acknowledge_incident.md) — Acknowledge a Better Stack incident to stop further escalations.
- [`create_incident`](actions/create_incident.md) — Create a Better Stack incident and alert the current on-call responder.
- [`escalate_incident`](actions/escalate_incident.md) — Escalate a Better Stack incident to a user, team, schedule, policy, or organization.
- [`get_incident`](actions/get_incident.md) — Get a Better Stack incident by ID with included resource context when available.
- [`list_incident_comments`](actions/list_incident_comments.md) — List all comments attached to a Better Stack incident.
- [`list_incidents`](actions/list_incidents.md) — List Better Stack incidents with optional date and status filters.
- [`list_metadata`](actions/list_metadata.md) — List Better Stack metadata records for incidents or other supported owner types.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Better Stack state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Better Stack is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=better_stack
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Better Stack homepage: https://betterstack.com
