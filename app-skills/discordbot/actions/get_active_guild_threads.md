# Discord Bot · `get_active_guild_threads`

Get active threads for a guild.

- **Service**: `discordbot`
- **Action**: `get_active_guild_threads`
- **Action id**: `discordbot.get_active_guild_threads`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_active_guild_threads"
```

## Run

```bash
oo connector run "discordbot" --action "get_active_guild_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
