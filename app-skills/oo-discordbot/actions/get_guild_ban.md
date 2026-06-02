# Discord Bot · `get_guild_ban`

Get a specific guild ban by user id.

- **Service**: `discordbot`
- **Action**: `get_guild_ban`
- **Action id**: `discordbot.get_guild_ban`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_ban"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_ban" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
