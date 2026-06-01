---
name: svix
description: "Svix (svix.com). Use this skill for ANY Svix request — reading, creating, updating, and deleting data. Whenever a task involves Svix, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Svix"
  author: "OOMOL"
  version: "1.0.0"
  service: "svix"
  categories: "Developer Tools"
  homepage: "https://www.svix.com"
  icon: "https://static.oomol.com/logo/third-party/Svix.svg"
---

# Svix

Operate **Svix** through your OOMOL-connected account. This skill calls the `svix` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Developer Tools. Exposes 16 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Svix. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "svix" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "svix" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_application`](actions/create_application.md) — Create a Svix application.
- [`create_endpoint`](actions/create_endpoint.md) — Create a new endpoint for a Svix application.
- [`create_event_type`](actions/create_event_type.md) — Create or unarchive a Svix event type.
- [`create_message`](actions/create_message.md) — Create and dispatch a Svix message to an application's endpoints.
- [`delete_application`](actions/delete_application.md) — Delete a Svix application by ID or UID.
- [`delete_endpoint`](actions/delete_endpoint.md) — Delete a Svix endpoint by application and endpoint identifier.
- [`get_application`](actions/get_application.md) — Fetch one Svix application by ID or UID.
- [`get_endpoint`](actions/get_endpoint.md) — Fetch one Svix endpoint by application and endpoint identifier.
- [`get_event_type`](actions/get_event_type.md) — Fetch one Svix event type by name.
- [`get_message`](actions/get_message.md) — Fetch one Svix message by application and message identifier.
- [`list_applications`](actions/list_applications.md) — List Svix applications for the current account.
- [`list_endpoints`](actions/list_endpoints.md) — List endpoints attached to a Svix application.
- [`list_event_types`](actions/list_event_types.md) — List event types available to the current Svix account.
- [`list_messages`](actions/list_messages.md) — List messages that belong to a Svix application.
- [`update_application`](actions/update_application.md) — Partially update a Svix application by ID or UID.
- [`update_endpoint`](actions/update_endpoint.md) — Partially update an existing Svix endpoint.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Svix state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Svix is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=svix
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Svix homepage: https://www.svix.com
