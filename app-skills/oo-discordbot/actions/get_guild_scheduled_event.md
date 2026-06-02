# Discord Bot · `get_guild_scheduled_event`

Get a guild scheduled event.

- **Service**: `discordbot`
- **Action**: `get_guild_scheduled_event`
- **Action id**: `discordbot.get_guild_scheduled_event`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_scheduled_event"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_scheduled_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
