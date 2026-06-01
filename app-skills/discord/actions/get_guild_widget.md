# Discord · `get_guild_widget`

Get a Discord guild widget as JSON.

- **Service**: `discord`
- **Action**: `get_guild_widget`
- **Action id**: `discord.get_guild_widget`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_guild_widget"
```

## Run

```bash
oo connector run "discord" --action "get_guild_widget" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
