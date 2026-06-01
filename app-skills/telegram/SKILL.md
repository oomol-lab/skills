---
name: telegram
description: "Telegram Bot (core.telegram.org). Use this skill for ANY Telegram Bot request — reading, creating, updating, and deleting data. Whenever a task involves Telegram Bot, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Telegram Bot"
  author: "OOMOL"
  version: "1.0.0"
  service: "telegram"
  categories: "Communication, Social"
  homepage: "https://core.telegram.org/bots"
  icon: "https://static.oomol.com/logo/third-party/Telegram.svg"
---

# Telegram Bot

Operate **Telegram Bot** through your OOMOL-connected account. This skill calls the `telegram` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Social. Exposes 21 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Telegram Bot. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "telegram" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "telegram" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`answer_callback_query`](actions/answer_callback_query.md) — Answer an inline keyboard callback query.
- [`create_chat_invite_link`](actions/create_chat_invite_link.md) — Export a new primary invite link for a chat. This maps to Telegram Bot API exportChatInviteLink.
- [`delete_message`](actions/delete_message.md) — Delete a message from a chat.
- [`delete_webhook`](actions/delete_webhook.md) — Delete the configured webhook and optionally drop pending updates.
- [`edit_message_text`](actions/edit_message_text.md) — Edit the text of a previously sent message or an inline message.
- [`forward_message`](actions/forward_message.md) — Forward a message from one chat to another.
- [`get_chat`](actions/get_chat.md) — Return metadata for a chat the bot can access.
- [`get_chat_administrators`](actions/get_chat_administrators.md) — Return the chat administrators visible to the bot.
- [`get_chat_history`](actions/get_chat_history.md) — Get chat history by polling getUpdates, filtering to one chat, and returning message-bearing updates only. This helper requires webhook delivery to be disabled.
- [`get_chat_member`](actions/get_chat_member.md) — Return information about one chat member.
- [`get_chat_members_count`](actions/get_chat_members_count.md) — Return the number of members in a chat.
- [`get_me`](actions/get_me.md) — Validate the bot token and return the bot profile from Telegram Bot API.
- [`get_updates`](actions/get_updates.md) — Poll pending updates for the bot. Use this only when webhook delivery is disabled or for debugging.
- [`get_webhook_info`](actions/get_webhook_info.md) — Return the webhook status configured for the bot.
- [`send_document`](actions/send_document.md) — Send a document by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this provider pass.
- [`send_location`](actions/send_location.md) — Send a map location to a chat.
- [`send_message`](actions/send_message.md) — Send a text message to a chat, group, supergroup, channel, or forum topic.
- [`send_photo`](actions/send_photo.md) — Send a photo by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this first pass.
- [`send_poll`](actions/send_poll.md) — Send a native Telegram poll to a chat.
- [`set_my_commands`](actions/set_my_commands.md) — Set the bot command list exposed in Telegram clients.
- [`set_webhook`](actions/set_webhook.md) — Configure a webhook endpoint for update delivery.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Telegram Bot state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Telegram Bot is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=telegram
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Telegram Bot homepage: https://core.telegram.org/bots
