---
name: oo-loops
description: "Loops (loops.so). Use this skill for ANY Loops request — reading, creating, updating, and deleting data. Whenever a task involves Loops, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Loops"
  author: "OOMOL"
  version: "1.0.0"
  service: "loops"
  categories: "Marketing, Communication"
  homepage: "https://loops.so"
---

# Loops

Operate **Loops** through your OOMOL-connected account. This skill calls the `loops` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Communication. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Loops. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "loops" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "loops" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_contact`](actions/create_contact.md) — Create a Loops contact with default and custom contact properties.
- [`create_contact_property`](actions/create_contact_property.md) — Create a custom contact property in Loops.
- [`delete_contact`](actions/delete_contact.md) — Delete a Loops contact by email or userId.
- [`find_contact`](actions/find_contact.md) — Find Loops contacts by email or userId.
- [`list_contact_properties`](actions/list_contact_properties.md) — List default or custom Loops contact properties.
- [`list_mailing_lists`](actions/list_mailing_lists.md) — List Loops mailing lists available to the current API key.
- [`send_event`](actions/send_event.md) — Send a Loops event to trigger workflows for a contact.
- [`update_contact`](actions/update_contact.md) — Update or create a Loops contact by email or userId.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Loops state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Loops is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=loops
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Loops homepage: https://loops.so
