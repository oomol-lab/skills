---
name: oo-personal-ai
description: "Personal AI (personal.ai). Use this skill for ANY Personal AI request — reading, creating, and updating data. Whenever a task involves Personal AI, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Personal AI"
  author: "OOMOL"
  version: "1.0.0"
  service: "personal_ai"
  categories: "AI, Productivity"
  homepage: "https://personal.ai"
---

# Personal AI

Operate **Personal AI** through your OOMOL-connected account. This skill calls the `personal_ai` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Productivity. Exposes 5 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Personal AI. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "personal_ai" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "personal_ai" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`send_instruction`](actions/send_instruction.md) — Send a chatgpt or search instruction to a Personal AI persona.
- [`send_message`](actions/send_message.md) — Send a message to a Personal AI persona and receive a response.
- [`upload_memory`](actions/upload_memory.md) — Upload one plain text memory to a Personal AI persona memory stack.
- [`upload_text_document`](actions/upload_text_document.md) — Upload a text document to a Personal AI persona memory library.
- [`upload_url`](actions/upload_url.md) — Upload public URL content to a Personal AI persona memory library.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Personal AI state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Personal AI is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=personal_ai
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Personal AI homepage: https://personal.ai
