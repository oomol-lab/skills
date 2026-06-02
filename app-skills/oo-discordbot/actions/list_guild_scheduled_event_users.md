# Discord Bot · `list_guild_scheduled_event_users`

List users for a guild scheduled event.

- **Service**: `discordbot`
- **Action**: `list_guild_scheduled_event_users`
- **Action id**: `discordbot.list_guild_scheduled_event_users`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_guild_scheduled_event_users"
```

## Run

```bash
oo connector run "discordbot" --action "list_guild_scheduled_event_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
