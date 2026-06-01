---
name: feishu-app-bot
description: "Feishu App Bot (open.feishu.cn). Use this skill for ANY Feishu App Bot request — reading, creating, updating, and deleting data. Whenever a task involves Feishu App Bot, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Feishu App Bot"
  author: "OOMOL"
  version: "1.0.0"
  service: "feishu_app_bot"
  categories: "Communication"
  homepage: "https://open.feishu.cn"
  icon: "https://static.oomol.com/logo/third-party/feishu_custom_bot.svg"
---

# Feishu App Bot

Operate **Feishu App Bot** through your OOMOL-connected account. This skill calls the `feishu_app_bot` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication. Exposes 20 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Feishu App Bot. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "feishu_app_bot" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "feishu_app_bot" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_message_reaction`](actions/add_message_reaction.md) — Add one emoji reaction to a Feishu/Lark message.
- [`download_file`](actions/download_file.md) — Download one Feishu/Lark file by file key and upload it to transit storage.
- [`download_image`](actions/download_image.md) — Download one Feishu/Lark image by image key and upload it to transit storage.
- [`edit_message`](actions/edit_message.md) — Edit a Feishu/Lark text or post message sent by the app bot.
- [`get_chat`](actions/get_chat.md) — Fetch one Feishu/Lark chat by `chat_id`.
- [`get_message`](actions/get_message.md) — Fetch one Feishu/Lark message by `message_id`.
- [`list_chat_members`](actions/list_chat_members.md) — List visible members in one Feishu/Lark chat.
- [`list_chats`](actions/list_chats.md) — List chats that the Feishu/Lark app bot currently belongs to.
- [`list_message_reactions`](actions/list_message_reactions.md) — List emoji reactions on one Feishu/Lark message.
- [`list_messages`](actions/list_messages.md) — List Feishu/Lark history messages from a chat or thread.
- [`list_pins`](actions/list_pins.md) — List pin records in one Feishu/Lark chat and time window.
- [`pin_message`](actions/pin_message.md) — Pin one Feishu/Lark message inside its chat.
- [`recall_message`](actions/recall_message.md) — Recall one Feishu/Lark message that the app bot sent.
- [`remove_message_reaction`](actions/remove_message_reaction.md) — Remove one Feishu/Lark message reaction by `reaction_id`.
- [`remove_pin`](actions/remove_pin.md) — Remove the pin state from one Feishu/Lark message.
- [`reply_message`](actions/reply_message.md) — Reply to an existing Feishu/Lark message as the app bot.
- [`search_chats`](actions/search_chats.md) — Search chats visible to the Feishu/Lark app bot by keyword.
- [`send_message`](actions/send_message.md) — Send a Feishu/Lark app bot message to a user or chat.
- [`upload_file`](actions/upload_file.md) — Upload one public file URL to Feishu/Lark and return the file key for message sending.
- [`upload_image`](actions/upload_image.md) — Upload one public image URL to Feishu/Lark and return the image key for message sending.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Feishu App Bot state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Feishu App Bot is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=feishu_app_bot
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Feishu App Bot homepage: https://open.feishu.cn
