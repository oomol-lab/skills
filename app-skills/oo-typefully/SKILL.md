---
name: oo-typefully
description: "Typefully (typefully.com). Use this skill for ANY Typefully request — reading, creating, updating, and deleting data. Whenever a task involves Typefully, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Typefully"
  author: "OOMOL"
  version: "1.0.0"
  service: "typefully"
  categories: "Social, Marketing"
  homepage: "https://typefully.com"
---

# Typefully

Operate **Typefully** through your OOMOL-connected account. This skill calls the `typefully` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Marketing. Exposes 8 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Typefully. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "typefully" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "typefully" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_draft`](actions/create_draft.md) — Create a Typefully draft for a social set.
- [`delete_draft`](actions/delete_draft.md) — Delete a Typefully draft by ID.
- [`get_current_user`](actions/get_current_user.md) — Retrieve the Typefully user associated with the current API key.
- [`get_draft`](actions/get_draft.md) — Retrieve a Typefully draft by ID.
- [`get_social_set`](actions/get_social_set.md) — Retrieve details for a Typefully social set.
- [`list_drafts`](actions/list_drafts.md) — List Typefully drafts for a social set with optional filters.
- [`list_social_sets`](actions/list_social_sets.md) — List Typefully social sets available to the current API key.
- [`update_draft`](actions/update_draft.md) — Update a Typefully draft by ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Typefully state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Typefully is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=typefully
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Typefully homepage: https://typefully.com
