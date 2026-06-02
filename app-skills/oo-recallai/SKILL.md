---
name: oo-recallai
description: "Recall.ai (recall.ai). Use this skill for ANY Recall.ai request — reading, creating, updating, and deleting data. Whenever a task involves Recall.ai, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Recall.ai"
  author: "OOMOL"
  version: "1.0.0"
  service: "recallai"
  categories: "Communication, AI"
  homepage: "https://www.recall.ai"
  icon: "https://static.oomol.com/logo/third-party/Recall.ai.svg"
---

# Recall.ai

Operate **Recall.ai** through your OOMOL-connected account. This skill calls the `recallai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, AI. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Recall.ai. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "recallai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "recallai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`create_bot`](actions/create_bot.md) — Create a Recall.ai bot with the core scheduling, recording, automatic-leave, and metadata fields needed for a first-pass meeting bot workflow.
- [`delete_bot_media`](actions/delete_bot_media.md) — Delete the Recall.ai media artifacts stored for a completed bot after downstream processing is finished.
- [`get_bot`](actions/get_bot.md) — Retrieve one Recall.ai bot by bot ID, including its current status changes, recordings, and metadata.
- [`list_bots`](actions/list_bots.md) — List Recall.ai bots with optional filters for scheduled date window, meeting URL, platform, status, metadata, and pagination.
- [`remove_bot_from_call`](actions/remove_bot_from_call.md) — Remove a Recall.ai bot from the meeting immediately when it is already active in the call.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Recall.ai state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Recall.ai is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=recallai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Recall.ai homepage: https://www.recall.ai
