# Discord Bot · `list_guild_channels`

List channels in a guild.

- **Service**: `discordbot`
- **Action**: `list_guild_channels`
- **Action id**: `discordbot.list_guild_channels`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_guild_channels"
```

## Run

```bash
oo connector run "discordbot" --action "list_guild_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
