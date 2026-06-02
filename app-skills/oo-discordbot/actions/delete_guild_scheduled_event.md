# Discord Bot · `delete_guild_scheduled_event`

Delete a guild scheduled event.

- **Service**: `discordbot`
- **Action**: `delete_guild_scheduled_event`
- **Action id**: `discordbot.delete_guild_scheduled_event`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_guild_scheduled_event"
```

## Run

```bash
oo connector run "discordbot" --action "delete_guild_scheduled_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
