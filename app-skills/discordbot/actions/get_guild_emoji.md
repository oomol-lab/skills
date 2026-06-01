# Discord Bot · `get_guild_emoji`

Get a guild emoji by id.

- **Service**: `discordbot`
- **Action**: `get_guild_emoji`
- **Action id**: `discordbot.get_guild_emoji`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_emoji"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_emoji" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
