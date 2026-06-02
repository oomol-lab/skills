# Discord Bot · `get_guild_widget_settings`

Get guild widget settings.

- **Service**: `discordbot`
- **Action**: `get_guild_widget_settings`
- **Action id**: `discordbot.get_guild_widget_settings`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_widget_settings"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_widget_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
