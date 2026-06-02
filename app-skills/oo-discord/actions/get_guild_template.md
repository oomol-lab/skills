# Discord · `get_guild_template`

Get a Discord guild template by code.

- **Service**: `discord`
- **Action**: `get_guild_template`
- **Action id**: `discord.get_guild_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_guild_template"
```

## Run

```bash
oo connector run "discord" --action "get_guild_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
