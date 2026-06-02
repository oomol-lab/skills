# Discord Bot · `get_guild_preview`

Get the preview for a discoverable guild.

- **Service**: `discordbot`
- **Action**: `get_guild_preview`
- **Action id**: `discordbot.get_guild_preview`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_preview"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_preview" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
