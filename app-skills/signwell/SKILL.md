---
name: signwell
description: "SignWell (signwell.com). Use this skill for ANY SignWell request — reading, creating, and updating data. Whenever a task involves SignWell, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "SignWell"
  author: "OOMOL"
  version: "1.0.0"
  service: "signwell"
  categories: "Productivity, Communication"
  homepage: "https://www.signwell.com"
  icon: "https://static.oomol.com/logo/third-party/signwell.svg"
---

# SignWell

Operate **SignWell** through your OOMOL-connected account. This skill calls the `signwell` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Communication. Exposes 6 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected SignWell. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "signwell" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "signwell" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_document_from_template`](actions/create_document_from_template.md) — Create a SignWell document from one or more existing templates with recipients and optional prefilled template field values.
- [`get_document`](actions/get_document.md) — Get a SignWell document and all associated document data by document ID.
- [`get_me`](actions/get_me.md) — Get the SignWell account information associated with the current API key.
- [`get_template`](actions/get_template.md) — Get a SignWell template and all associated template data by template ID.
- [`send_document`](actions/send_document.md) — Send a draft SignWell document for signing, with optional final subject, message, reminder, and redirect updates.
- [`send_document_reminder`](actions/send_document_reminder.md) — Send a SignWell reminder email to all unsigned recipients or to a targeted subset on a document.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change SignWell state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — SignWell is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=signwell
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- SignWell homepage: https://www.signwell.com
