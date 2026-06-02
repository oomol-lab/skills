# Discord Bot · `get_guild_widget_png`

Get the public guild widget PNG.

- **Service**: `discordbot`
- **Action**: `get_guild_widget_png`
- **Action id**: `discordbot.get_guild_widget_png`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_widget_png"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_widget_png" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
