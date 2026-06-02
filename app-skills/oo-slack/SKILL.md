---
name: oo-slack
description: "Slack (slack.com). Use this skill for ANY Slack request — reading, creating, updating, and deleting data. Whenever a task involves Slack, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Slack"
  author: "OOMOL"
  version: "1.0.0"
  service: "slack"
  categories: "Communication, Productivity"
  homepage: "https://slack.com"
  icon: "https://static.oomol.com/logo/third-party/Slack.svg"
---

# Slack

Operate **Slack** through your OOMOL-connected account. This skill calls the `slack` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Productivity. Exposes 14 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Slack. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "slack" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "slack" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`delete_message`](actions/delete_message.md) — Delete a Slack message posted by the bot.
- [`get_channel_messages`](actions/get_channel_messages.md) — Get messages from a Slack channel.
- [`get_conversation`](actions/get_conversation.md) — Get metadata for a Slack conversation.
- [`get_message_permalink`](actions/get_message_permalink.md) — Get a permalink for a Slack message.
- [`get_thread`](actions/get_thread.md) — Get messages in a Slack thread.
- [`get_user`](actions/get_user.md) — Get metadata for a Slack user.
- [`list_channels`](actions/list_channels.md) — List Slack channels.
- [`list_conversations`](actions/list_conversations.md) — List Slack conversations visible to the bot.
- [`list_users`](actions/list_users.md) — List Slack users visible to the bot.
- [`post_ephemeral_message`](actions/post_ephemeral_message.md) — Post an ephemeral message to a Slack conversation.
- [`post_message`](actions/post_message.md) — Post a message to a Slack channel.
- [`reply_message`](actions/reply_message.md) — Reply to a Slack thread.
- [`schedule_message`](actions/schedule_message.md) — Schedule a Slack message to be posted later.
- [`update_message`](actions/update_message.md) — Update a Slack message posted by the bot.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Slack state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Slack is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=slack
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Slack homepage: https://slack.com
