# flomo · `memory_user`

Read the generated flomo memory user profile through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `memory_user`
- **Action id**: `flomo.memory_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memory_user"
```

## Run

```bash
oo connector run "flomo" --action "memory_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
