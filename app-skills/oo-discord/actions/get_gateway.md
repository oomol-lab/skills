# Discord · `get_gateway`

Get a Discord Gateway URL.

- **Service**: `discord`
- **Action**: `get_gateway`
- **Action id**: `discord.get_gateway`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_gateway"
```

## Run

```bash
oo connector run "discord" --action "get_gateway" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
