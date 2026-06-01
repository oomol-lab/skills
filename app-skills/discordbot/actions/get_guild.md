# Discord Bot · `get_guild`

Get a guild by id using the platform bot token.

- **Service**: `discordbot`
- **Action**: `get_guild`
- **Action id**: `discordbot.get_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
