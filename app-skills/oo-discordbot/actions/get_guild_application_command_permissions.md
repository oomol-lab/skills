# Discord Bot · `get_guild_application_command_permissions`

Get guild application command permissions.

- **Service**: `discordbot`
- **Action**: `get_guild_application_command_permissions`
- **Action id**: `discordbot.get_guild_application_command_permissions`
- **Required scopes**: discordbot.commands.permissions.update

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_application_command_permissions"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_application_command_permissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
