---
name: refiner
description: "Refiner (refiner.io). Use this skill for ANY Refiner request — reading, creating, updating, and deleting data. Whenever a task involves Refiner, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Refiner"
  author: "OOMOL"
  version: "1.0.0"
  service: "refiner"
  categories: "Marketing, Data & Analytics"
  homepage: "https://refiner.io"
  icon: "https://static.oomol.com/logo/third-party/Refiner.svg"
---

# Refiner

Operate **Refiner** through your OOMOL-connected account. This skill calls the `refiner` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Marketing, Data & Analytics. Exposes 12 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Refiner. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "refiner" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "refiner" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_contact_to_segment`](actions/add_contact_to_segment.md) — Add a Refiner contact to a manual segment.
- [`get_account_info`](actions/get_account_info.md) — Retrieve the current Refiner account, project, and subscription information.
- [`get_contact`](actions/get_contact.md) — Retrieve a single Refiner contact by id, email, or uuid.
- [`get_reporting`](actions/get_reporting.md) — Retrieve Refiner reporting metrics for forms, segments, and questions.
- [`identify_user`](actions/identify_user.md) — Create or update a Refiner contact using the official identify-user endpoint.
- [`list_contacts`](actions/list_contacts.md) — List contacts available in the connected Refiner workspace.
- [`list_forms`](actions/list_forms.md) — List forms in the connected Refiner workspace.
- [`list_responses`](actions/list_responses.md) — List survey responses collected in Refiner.
- [`list_segments`](actions/list_segments.md) — List segments in the connected Refiner workspace.
- [`remove_contact_from_segment`](actions/remove_contact_from_segment.md) — Remove a Refiner contact from a manual segment.
- [`tag_response`](actions/tag_response.md) — Apply a tag to a Refiner response.
- [`track_event`](actions/track_event.md) — Track a product event for a Refiner contact.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Refiner state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Refiner is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=refiner
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Refiner homepage: https://refiner.io
