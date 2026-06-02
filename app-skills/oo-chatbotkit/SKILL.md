---
name: oo-chatbotkit
description: "ChatBotKit (chatbotkit.com). Use this skill for ANY ChatBotKit request — reading, creating, and updating data. Whenever a task involves ChatBotKit, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ChatBotKit"
  author: "OOMOL"
  version: "1.0.0"
  service: "chatbotkit"
  categories: "AI, Developer Tools"
  homepage: "https://chatbotkit.com"
  icon: "https://static.oomol.com/logo/third-party/Chatbotkit.svg"
---

# ChatBotKit

Operate **ChatBotKit** through your OOMOL-connected account. This skill calls the `chatbotkit` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 27 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ChatBotKit. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "chatbotkit" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "chatbotkit" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`attach_dataset_file`](actions/attach_dataset_file.md) — Attach an existing ChatBotKit file to a dataset.
- [`complete_conversation`](actions/complete_conversation.md) — Send a message to a ChatBotKit conversation and receive the next assistant reply.
- [`create_bot`](actions/create_bot.md) — Create a new ChatBotKit bot.
- [`create_conversation`](actions/create_conversation.md) — Create a new ChatBotKit conversation with either a bot reference or inline bot configuration.
- [`create_conversation_message`](actions/create_conversation_message.md) — Append a message to an existing ChatBotKit conversation.
- [`create_dataset`](actions/create_dataset.md) — Create a new ChatBotKit dataset for knowledge retrieval.
- [`create_dataset_record`](actions/create_dataset_record.md) — Create a new record inside a ChatBotKit dataset.
- [`create_file`](actions/create_file.md) — Create a new ChatBotKit file resource.
- [`detach_dataset_file`](actions/detach_dataset_file.md) — Detach a ChatBotKit file from a dataset.
- [`download_file`](actions/download_file.md) — Fetch the download URL for an existing ChatBotKit file.
- [`fetch_bot`](actions/fetch_bot.md) — Fetch a single ChatBotKit bot by ID.
- [`fetch_conversation`](actions/fetch_conversation.md) — Fetch a single ChatBotKit conversation by ID.
- [`fetch_dataset`](actions/fetch_dataset.md) — Fetch a single ChatBotKit dataset by ID.
- [`fetch_file`](actions/fetch_file.md) — Fetch a single ChatBotKit file by ID.
- [`fetch_usage`](actions/fetch_usage.md) — Fetch account-wide ChatBotKit usage statistics for tokens, conversations, messages, and database resources.
- [`list_bots`](actions/list_bots.md) — List ChatBotKit bots with optional pagination and metadata filtering.
- [`list_conversation_messages`](actions/list_conversation_messages.md) — List messages inside a ChatBotKit conversation.
- [`list_conversations`](actions/list_conversations.md) — List ChatBotKit conversations with optional pagination and metadata filtering.
- [`list_dataset_files`](actions/list_dataset_files.md) — List files attached to a ChatBotKit dataset.
- [`list_dataset_records`](actions/list_dataset_records.md) — List records inside a ChatBotKit dataset.
- [`list_datasets`](actions/list_datasets.md) — List ChatBotKit datasets with optional pagination and metadata filtering.
- [`list_files`](actions/list_files.md) — List ChatBotKit files with optional pagination and metadata filtering.
- [`search_dataset`](actions/search_dataset.md) — Run semantic search against a ChatBotKit dataset.
- [`sync_file`](actions/sync_file.md) — Trigger synchronization for an existing ChatBotKit file.
- [`update_bot`](actions/update_bot.md) — Update an existing ChatBotKit bot.
- [`update_dataset`](actions/update_dataset.md) — Update an existing ChatBotKit dataset.
- [`upload_file`](actions/upload_file.md) — Upload content to an existing ChatBotKit file using the official JSON upload modes.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ChatBotKit state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ChatBotKit is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=chatbotkit
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ChatBotKit homepage: https://chatbotkit.com
