---
name: oo-salesforge
description: "Salesforge (salesforge.ai). Use this skill for ANY Salesforge request — reading, creating, updating, and deleting data. Whenever a task involves Salesforge, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Salesforge"
  author: "OOMOL"
  version: "1.0.0"
  services: ["salesforge"]
  icon: "https://static.oomol.com/logo/third-party/salesforge.svg"
---

# Salesforge

Operate **Salesforge** through your OOMOL-connected account. This skill calls the `salesforge` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Salesforge. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "salesforge" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "salesforge" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `count_contacts` — Count matching active workspace contacts. Request exact counts only when needed.
- `create_contact` — Create a workspace contact with an email address or LinkedIn URL. If no tags are supplied, Salesforge applies a date-based tag. [write]
- `create_dncs` — Add up to 1000 email addresses, domains, or LinkedIn URLs to the workspace do-not-contact list. [write]
- `delete_contact` — Delete a contact from a workspace. [destructive]
- `get_contact` — Get a contact, including tags and sequence enrollments.
- `get_current_user` — Validate the API key and retrieve its account ID, name, and read-only flag.
- `get_workspace` — Get a workspace by ID.
- `list_contacts` — List workspace contacts with filters and offset or cursor pagination. Use pagination=cursor for the first cursor page and nextCursor as cursor for subsequent pages with the same filters.
- `list_dncs` — List workspace do-not-contact entries with offset pagination.
- `list_tags` — List non-hidden workspace tags ordered by name, optionally filtered by name.
- `list_workspaces` — List account workspaces with offset pagination.
- `remove_dncs` — Remove up to 1000 values from the workspace do-not-contact list, allowing them to be contacted again. [destructive]

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change Salesforge state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Salesforge is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/connections/salesforge
  ```

- **`OOMOL_INSUFFICIENT_CREDIT`** — OOMOL billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

- **HTTP 402 without `OOMOL_INSUFFICIENT_CREDIT`** — the third-party account itself has no active plan or credit. Report the provider error message as is; do not ask the user to recharge OOMOL.

## Resources

- Salesforge homepage: https://www.salesforge.ai
- API documentation: https://developer.salesforge.ai
