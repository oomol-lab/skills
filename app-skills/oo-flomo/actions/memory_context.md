# flomo · `memory_context`

Read the generated flomo memory context through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `memory_context`
- **Action id**: `flomo.memory_context`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memory_context"
```

## Run

```bash
oo connector run "flomo" --action "memory_context" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
