# Discord Bot · `delete_guild_application_command`

Delete a guild-scoped application command.

- **Service**: `discordbot`
- **Action**: `delete_guild_application_command`
- **Action id**: `discordbot.delete_guild_application_command`
- **Required scopes**: discordbot.commands

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_guild_application_command"
```

## Run

```bash
oo connector run "discordbot" --action "delete_guild_application_command" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
