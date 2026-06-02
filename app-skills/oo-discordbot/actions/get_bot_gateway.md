# Discord Bot · `get_bot_gateway`

Get gateway connection info for the platform bot.

- **Service**: `discordbot`
- **Action**: `get_bot_gateway`
- **Action id**: `discordbot.get_bot_gateway`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_bot_gateway"
```

## Run

```bash
oo connector run "discordbot" --action "get_bot_gateway" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
