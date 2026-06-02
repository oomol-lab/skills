# Discord Bot · `get_gateway`

Get the public Discord gateway URL.

- **Service**: `discordbot`
- **Action**: `get_gateway`
- **Action id**: `discordbot.get_gateway`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_gateway"
```

## Run

```bash
oo connector run "discordbot" --action "get_gateway" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
