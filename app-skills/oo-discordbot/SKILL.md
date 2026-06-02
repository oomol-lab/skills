---
name: oo-discordbot
description: "Discord Bot (discord.com). Use this skill for ANY Discord Bot request — reading, creating, updating, and deleting data. Whenever a task involves Discord Bot, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Discord Bot"
  author: "OOMOL"
  version: "1.0.0"
  service: "discordbot"
  categories: "Communication, Developer Tools"
  homepage: "https://discord.com/developers/applications"
  icon: "https://static.oomol.com/logo/third-party/Discord%20Bot.svg"
---

# Discord Bot

Operate **Discord Bot** through your OOMOL-connected account. This skill calls the `discordbot` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Communication, Developer Tools. Exposes 141 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Discord Bot. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "discordbot" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "discordbot" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_group_dm_user`](actions/add_group_dm_user.md) — Add a recipient to a group DM channel.
- [`add_guild_member`](actions/add_guild_member.md) — Add a user to a guild with a user access token.
- [`add_guild_member_role`](actions/add_guild_member_role.md) — Add a role to a guild member.
- [`add_my_message_reaction`](actions/add_my_message_reaction.md) — Add a reaction as the current bot user.
- [`add_thread_member`](actions/add_thread_member.md) — Add a member to a thread.
- [`ban_user_from_guild`](actions/ban_user_from_guild.md) — Ban a user from a guild.
- [`bulk_ban_users_from_guild`](actions/bulk_ban_users_from_guild.md) — Bulk ban users from a guild.
- [`bulk_delete_messages`](actions/bulk_delete_messages.md) — Bulk delete messages in a Discord channel.
- [`create_application_command`](actions/create_application_command.md) — Create a global application command.
- [`create_auto_moderation_rule`](actions/create_auto_moderation_rule.md) — Create a guild auto moderation rule.
- [`create_channel_invite`](actions/create_channel_invite.md) — Create an invite for a Discord channel.
- [`create_dm`](actions/create_dm.md) — Create or fetch a DM channel with a recipient user.
- [`create_guild`](actions/create_guild.md) — Create a guild with the platform bot token.
- [`create_guild_application_command`](actions/create_guild_application_command.md) — Create a guild-scoped application command.
- [`create_guild_channel`](actions/create_guild_channel.md) — Create a channel in a guild.
- [`create_guild_emoji`](actions/create_guild_emoji.md) — Create a guild emoji.
- [`create_guild_from_template`](actions/create_guild_from_template.md) — Create a guild from a template with the platform bot token.
- [`create_guild_role`](actions/create_guild_role.md) — Create a role in a guild.
- [`create_guild_scheduled_event`](actions/create_guild_scheduled_event.md) — Create a guild scheduled event.
- [`create_guild_sticker`](actions/create_guild_sticker.md) — Create a guild sticker from base64 file content.
- [`create_guild_template`](actions/create_guild_template.md) — Create a template for a guild.
- [`create_message`](actions/create_message.md) — Create a Discord channel message with the platform bot token.
- [`create_thread`](actions/create_thread.md) — Create a thread in a Discord channel.
- [`create_thread_from_message`](actions/create_thread_from_message.md) — Create a thread from a Discord message.
- [`crosspost_message`](actions/crosspost_message.md) — Crosspost a message in an announcement channel.
- [`delete_all_message_reactions`](actions/delete_all_message_reactions.md) — Delete all reactions on a message.
- [`delete_all_message_reactions_by_emoji`](actions/delete_all_message_reactions_by_emoji.md) — Delete all reactions for a specific emoji on a message.
- [`delete_application_command`](actions/delete_application_command.md) — Delete a global application command.
- [`delete_auto_moderation_rule`](actions/delete_auto_moderation_rule.md) — Delete an auto moderation rule.
- [`delete_channel`](actions/delete_channel.md) — Delete a channel.
- [`delete_channel_permission_overwrite`](actions/delete_channel_permission_overwrite.md) — Delete a channel permission overwrite.
- [`delete_group_dm_user`](actions/delete_group_dm_user.md) — Remove a recipient from a group DM channel.
- [`delete_guild`](actions/delete_guild.md) — Delete a guild owned by the platform bot.
- [`delete_guild_application_command`](actions/delete_guild_application_command.md) — Delete a guild-scoped application command.
- [`delete_guild_emoji`](actions/delete_guild_emoji.md) — Delete a guild emoji.
- [`delete_guild_integration`](actions/delete_guild_integration.md) — Delete a guild integration.
- [`delete_guild_member`](actions/delete_guild_member.md) — Delete a user from a guild.
- [`delete_guild_member_role`](actions/delete_guild_member_role.md) — Delete a role from a guild member.
- [`delete_guild_role`](actions/delete_guild_role.md) — Delete a guild role.
- [`delete_guild_scheduled_event`](actions/delete_guild_scheduled_event.md) — Delete a guild scheduled event.
- [`delete_guild_sticker`](actions/delete_guild_sticker.md) — Delete a guild sticker.
- [`delete_guild_template`](actions/delete_guild_template.md) — Delete a guild template.
- [`delete_message`](actions/delete_message.md) — Delete a message in a Discord channel.
- [`delete_my_message_reaction`](actions/delete_my_message_reaction.md) — Delete the current bot user's reaction on a message.
- [`delete_thread_member`](actions/delete_thread_member.md) — Delete a member from a thread.
- [`delete_user_message_reaction`](actions/delete_user_message_reaction.md) — Delete another user's reaction on a message.
- [`follow_channel`](actions/follow_channel.md) — Follow an announcement channel into a target channel.
- [`get_active_guild_threads`](actions/get_active_guild_threads.md) — Get active threads for a guild.
- [`get_application`](actions/get_application.md) — Get an application by id.
- [`get_application_command`](actions/get_application_command.md) — Get a global application command.
- [`get_application_role_connections_metadata`](actions/get_application_role_connections_metadata.md) — Get application role connection metadata.
- [`get_application_user_role_connection`](actions/get_application_user_role_connection.md) — Get the current user's application role connection.
- [`get_auto_moderation_rule`](actions/get_auto_moderation_rule.md) — Get an auto moderation rule.
- [`get_bot_gateway`](actions/get_bot_gateway.md) — Get gateway connection info for the platform bot.
- [`get_channel`](actions/get_channel.md) — Get a channel by id.
- [`get_gateway`](actions/get_gateway.md) — Get the public Discord gateway URL.
- [`get_guild`](actions/get_guild.md) — Get a guild by id using the platform bot token.
- [`get_guild_application_command`](actions/get_guild_application_command.md) — Get a guild-scoped application command.
- [`get_guild_application_command_permissions`](actions/get_guild_application_command_permissions.md) — Get guild application command permissions.
- [`get_guild_ban`](actions/get_guild_ban.md) — Get a specific guild ban by user id.
- [`get_guild_emoji`](actions/get_guild_emoji.md) — Get a guild emoji by id.
- [`get_guild_member`](actions/get_guild_member.md) — Get a guild member by guild id and user id.
- [`get_guild_preview`](actions/get_guild_preview.md) — Get the preview for a discoverable guild.
- [`get_guild_scheduled_event`](actions/get_guild_scheduled_event.md) — Get a guild scheduled event.
- [`get_guild_sticker`](actions/get_guild_sticker.md) — Get a guild sticker by id.
- [`get_guild_template`](actions/get_guild_template.md) — Get a guild template by code.
- [`get_guild_vanity_url`](actions/get_guild_vanity_url.md) — Get the vanity invite for a guild.
- [`get_guild_welcome_screen`](actions/get_guild_welcome_screen.md) — Get a guild welcome screen.
- [`get_guild_widget`](actions/get_guild_widget.md) — Get the public guild widget JSON.
- [`get_guild_widget_png`](actions/get_guild_widget_png.md) — Get the public guild widget PNG.
- [`get_guild_widget_settings`](actions/get_guild_widget_settings.md) — Get guild widget settings.
- [`get_guilds_onboarding`](actions/get_guilds_onboarding.md) — Get guild onboarding configuration.
- [`get_message`](actions/get_message.md) — Get a message by channel id and message id.
- [`get_my_application`](actions/get_my_application.md) — Get the current platform bot application.
- [`get_my_oauth2_application`](actions/get_my_oauth2_application.md) — Get the current OAuth2 application information.
- [`get_public_keys`](actions/get_public_keys.md) — Get Discord OAuth2 public keys.
- [`get_sticker`](actions/get_sticker.md) — Get a sticker by id.
- [`get_thread_member`](actions/get_thread_member.md) — Get a thread member by user id.
- [`get_user`](actions/get_user.md) — Get a user by id.
- [`invite_resolve`](actions/invite_resolve.md) — Resolve a guild or channel invite by code.
- [`invite_revoke`](actions/invite_revoke.md) — Revoke an invite by code.
- [`join_thread`](actions/join_thread.md) — Join a thread as the current bot user.
- [`leave_guild`](actions/leave_guild.md) — Leave a guild as the current bot user.
- [`leave_thread`](actions/leave_thread.md) — Leave a thread as the current bot user.
- [`list_application_commands`](actions/list_application_commands.md) — List global application commands.
- [`list_auto_moderation_rules`](actions/list_auto_moderation_rules.md) — List auto moderation rules for a guild.
- [`list_channel_invites`](actions/list_channel_invites.md) — List invites for a channel.
- [`list_guild_application_command_permissions`](actions/list_guild_application_command_permissions.md) — List guild application command permissions.
- [`list_guild_application_commands`](actions/list_guild_application_commands.md) — List guild-scoped application commands.
- [`list_guild_audit_log_entries`](actions/list_guild_audit_log_entries.md) — List audit log entries for a guild.
- [`list_guild_bans`](actions/list_guild_bans.md) — List bans for a guild.
- [`list_guild_channels`](actions/list_guild_channels.md) — List channels in a guild.
- [`list_guild_emojis`](actions/list_guild_emojis.md) — List emojis for a guild.
- [`list_guild_integrations`](actions/list_guild_integrations.md) — List guild integrations.
- [`list_guild_invites`](actions/list_guild_invites.md) — List invites for a guild.
- [`list_guild_members`](actions/list_guild_members.md) — List guild members.
- [`list_guild_roles`](actions/list_guild_roles.md) — List roles in a guild.
- [`list_guild_scheduled_event_users`](actions/list_guild_scheduled_event_users.md) — List users for a guild scheduled event.
- [`list_guild_scheduled_events`](actions/list_guild_scheduled_events.md) — List scheduled events for a guild.
- [`list_guild_stickers`](actions/list_guild_stickers.md) — List stickers for a guild.
- [`list_guild_templates`](actions/list_guild_templates.md) — List templates for a guild.
- [`list_guild_voice_regions`](actions/list_guild_voice_regions.md) — List voice regions for a guild.
- [`list_message_reactions_by_emoji`](actions/list_message_reactions_by_emoji.md) — List users who reacted to a message with a specific emoji.
- [`list_messages`](actions/list_messages.md) — List messages in a channel.
- [`list_my_private_archived_threads`](actions/list_my_private_archived_threads.md) — List private archived threads joined by the current bot user.
- [`list_pinned_messages`](actions/list_pinned_messages.md) — List pinned messages in a channel.
- [`list_private_archived_threads`](actions/list_private_archived_threads.md) — List private archived threads in a channel.
- [`list_public_archived_threads`](actions/list_public_archived_threads.md) — List public archived threads in a channel.
- [`list_sticker_packs`](actions/list_sticker_packs.md) — List public sticker packs.
- [`list_thread_members`](actions/list_thread_members.md) — List thread members.
- [`list_voice_regions`](actions/list_voice_regions.md) — List public voice regions.
- [`pin_message`](actions/pin_message.md) — Pin a message in a channel.
- [`preview_prune_guild`](actions/preview_prune_guild.md) — Preview how many members would be pruned from a guild.
- [`prune_guild`](actions/prune_guild.md) — Prune inactive members from a guild.
- [`put_guilds_onboarding`](actions/put_guilds_onboarding.md) — Update guild onboarding configuration.
- [`search_guild_members`](actions/search_guild_members.md) — Search guild members by query.
- [`set_channel_permission_overwrite`](actions/set_channel_permission_overwrite.md) — Create or update a channel permission overwrite.
- [`sync_guild_template`](actions/sync_guild_template.md) — Sync a guild template with the current guild state.
- [`test_auth`](actions/test_auth.md) — Test the configured bot token against /users/@me.
- [`trigger_typing_indicator`](actions/trigger_typing_indicator.md) — Trigger the typing indicator in a channel.
- [`unban_user_from_guild`](actions/unban_user_from_guild.md) — Remove a guild ban for a user.
- [`unpin_message`](actions/unpin_message.md) — Unpin a message in a channel.
- [`update_application_command`](actions/update_application_command.md) — Update a global application command.
- [`update_application_user_role_connection`](actions/update_application_user_role_connection.md) — Update the current user's application role connection.
- [`update_auto_moderation_rule`](actions/update_auto_moderation_rule.md) — Update an auto moderation rule.
- [`update_channel`](actions/update_channel.md) — Update settings for an existing channel.
- [`update_guild`](actions/update_guild.md) — Update guild settings.
- [`update_guild_application_command`](actions/update_guild_application_command.md) — Update a guild-scoped application command.
- [`update_guild_emoji`](actions/update_guild_emoji.md) — Update a guild emoji.
- [`update_guild_member`](actions/update_guild_member.md) — Update a guild member.
- [`update_guild_role`](actions/update_guild_role.md) — Update a guild role.
- [`update_guild_scheduled_event`](actions/update_guild_scheduled_event.md) — Update a guild scheduled event.
- [`update_guild_sticker`](actions/update_guild_sticker.md) — Update a guild sticker.
- [`update_guild_template`](actions/update_guild_template.md) — Update a guild template.
- [`update_guild_welcome_screen`](actions/update_guild_welcome_screen.md) — Update a guild welcome screen.
- [`update_guild_widget_settings`](actions/update_guild_widget_settings.md) — Update guild widget settings.
- [`update_message`](actions/update_message.md) — Update a message in a Discord channel.
- [`update_my_guild_member`](actions/update_my_guild_member.md) — Update the current bot user's guild member profile.
- [`update_my_user`](actions/update_my_user.md) — Update the current bot user's profile.
- [`update_self_voice_state`](actions/update_self_voice_state.md) — Update the current bot user's voice state.
- [`update_voice_state`](actions/update_voice_state.md) — Update another user's voice state.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Discord Bot state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Discord Bot is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=discordbot
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Discord Bot homepage: https://discord.com/developers/applications
