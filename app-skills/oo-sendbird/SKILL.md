---
name: oo-sendbird
description: "Sendbird (sendbird.com). Use this skill for ANY Sendbird request — reading, creating, updating, and deleting data. Whenever a task involves Sendbird, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Sendbird"
  author: "OOMOL"
  version: "1.0.0"
  service: "sendbird"
  categories: "Communication"
  homepage: "https://sendbird.com"
  icon: "https://static.oomol.com/logo/third-party/Sendbird.svg"
---

# Sendbird

Operate **Sendbird** through your OOMOL-connected account. This skill calls the `sendbird` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication. Exposes 28 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Sendbird. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "sendbird" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "sendbird" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_members_group_channel`](actions/add_members_group_channel.md) — Invite members into an existing Sendbird group channel.
- [`ban_user_from_group_channel`](actions/ban_user_from_group_channel.md) — Ban a user from a Sendbird group channel.
- [`create_channel`](actions/create_channel.md) — Create a Sendbird group channel with common JSON body fields.
- [`create_user`](actions/create_user.md) — Create a Sendbird user with common profile and metadata fields.
- [`delete_channel`](actions/delete_channel.md) — Delete a Sendbird group channel.
- [`delete_message`](actions/delete_message.md) — Delete a Sendbird group channel message.
- [`delete_user`](actions/delete_user.md) — Delete a Sendbird user.
- [`get_number_of_channels_by_join_status`](actions/get_number_of_channels_by_join_status.md) — Get Sendbird group channel counts grouped by join status.
- [`get_number_of_unread_items`](actions/get_number_of_unread_items.md) — Get unread message, mention, and invitation counts for a Sendbird user.
- [`issue_session_token`](actions/issue_session_token.md) — Issue a Sendbird session token for a user.
- [`leave_group_channels`](actions/leave_group_channels.md) — Make a Sendbird user leave one or more joined group channels.
- [`list_banned_members`](actions/list_banned_members.md) — List banned users from a Sendbird group channel.
- [`list_group_channel_messages`](actions/list_group_channel_messages.md) — List messages from a Sendbird group channel around a timestamp or message anchor.
- [`list_group_channels`](actions/list_group_channels.md) — List Sendbird group channels in the application with common filtering controls.
- [`list_members_group_channel`](actions/list_members_group_channel.md) — List members of a Sendbird group channel.
- [`list_users`](actions/list_users.md) — List Sendbird users with common pagination and filtering controls.
- [`mark_all_user_messages_as_read`](actions/mark_all_user_messages_as_read.md) — Mark all messages as read for a Sendbird user.
- [`mute_user`](actions/mute_user.md) — Mute a user in a Sendbird group channel.
- [`revoke_all_session_tokens`](actions/revoke_all_session_tokens.md) — Revoke all Sendbird session tokens for a user.
- [`send_message`](actions/send_message.md) — Send a message into a Sendbird group channel.
- [`unban_user`](actions/unban_user.md) — Unban a user from a Sendbird group channel.
- [`unmute_user`](actions/unmute_user.md) — Unmute a user in a Sendbird group channel.
- [`update_group_channel`](actions/update_group_channel.md) — Update a Sendbird group channel with common JSON body fields.
- [`update_message`](actions/update_message.md) — Update an existing Sendbird group channel message.
- [`update_user`](actions/update_user.md) — Update a Sendbird user's profile, metadata, or activation settings.
- [`view_group_channel`](actions/view_group_channel.md) — Get a Sendbird group channel by channel URL.
- [`view_message`](actions/view_message.md) — Get a single Sendbird group channel message by message ID.
- [`view_user`](actions/view_user.md) — Get a single Sendbird user by user ID.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Sendbird state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Sendbird is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=sendbird
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Sendbird homepage: https://sendbird.com
