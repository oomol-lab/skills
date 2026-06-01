---
name: googleforms
description: "Google Forms (workspace.google.com). Use this skill for ANY Google Forms request — reading, creating, and updating data. Whenever a task involves Google Forms, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Google Forms"
  author: "OOMOL"
  version: "1.0.0"
  service: "googleforms"
  categories: "Productivity, Data & Analytics"
  homepage: "https://workspace.google.com/products/forms/"
  icon: "https://static.oomol.com/logo/third-party/Googleforms.svg"
---

# Google Forms

Operate **Google Forms** through your OOMOL-connected account. This skill calls the `googleforms` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Data & Analytics. Exposes 7 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Google Forms. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "googleforms" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "googleforms" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`batch_update_form`](actions/batch_update_form.md) — Apply a batch of Google Forms update requests with optional revision controls and an optional updated form payload.
- [`create_form`](actions/create_form.md) — Create a Google Form with a simple title-based input and optionally initialize the description and unpublished state.
- [`get_form`](actions/get_form.md) — Retrieve the current structure, settings, publish state, and items of a Google Form.
- [`get_response`](actions/get_response.md) — Retrieve a single Google Forms response by its response ID.
- [`list_responses`](actions/list_responses.md) — List responses for a Google Form with optional filtering and pagination.
- [`list_watches`](actions/list_watches.md) — List watches configured for a Google Form.
- [`set_publish_settings`](actions/set_publish_settings.md) — Update whether a Google Form is published and whether it is accepting responses.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Google Forms state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Google Forms is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=googleforms
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Google Forms homepage: https://workspace.google.com/products/forms/
