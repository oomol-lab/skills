---
name: oo-basin
description: "Basin (usebasin.com). Use this skill for ANY Basin request — reading, creating, updating, and deleting data. Whenever a task involves Basin, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Basin"
  author: "OOMOL"
  version: "1.0.0"
  service: "basin"
  categories: "Productivity, Marketing"
  homepage: "https://usebasin.com"
  icon: "https://static.oomol.com/logo/third-party/Basin.svg"
---

# Basin

Operate **Basin** through your OOMOL-connected account. This skill calls the `basin` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity, Marketing. Exposes 18 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Basin. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "basin" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "basin" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_form`](actions/create_form.md) — Create a new Basin form.
- [`create_form_webhook`](actions/create_form_webhook.md) — Create a new Basin form webhook.
- [`create_project`](actions/create_project.md) — Create a new Basin project.
- [`delete_form`](actions/delete_form.md) — Delete a Basin form by ID.
- [`delete_form_webhook`](actions/delete_form_webhook.md) — Delete a Basin form webhook by ID.
- [`delete_project`](actions/delete_project.md) — Delete a Basin project by ID.
- [`delete_submission`](actions/delete_submission.md) — Delete a Basin submission by ID.
- [`get_form`](actions/get_form.md) — Fetch a single Basin form by ID.
- [`get_form_webhook`](actions/get_form_webhook.md) — Fetch a single Basin form webhook by ID.
- [`get_project`](actions/get_project.md) — Fetch a single Basin project by ID.
- [`get_submission`](actions/get_submission.md) — Fetch a single Basin submission by ID.
- [`list_form_webhooks`](actions/list_form_webhooks.md) — List Basin form webhooks with optional filters.
- [`list_forms`](actions/list_forms.md) — List forms available to the current Basin API key.
- [`list_projects`](actions/list_projects.md) — List projects available to the current Basin API key.
- [`list_submissions`](actions/list_submissions.md) — List Basin form submissions with optional filters.
- [`update_form`](actions/update_form.md) — Update an existing Basin form by ID.
- [`update_form_webhook`](actions/update_form_webhook.md) — Update an existing Basin form webhook by ID.
- [`update_project`](actions/update_project.md) — Update an existing Basin project by ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Basin state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Basin is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=basin
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Basin homepage: https://usebasin.com
