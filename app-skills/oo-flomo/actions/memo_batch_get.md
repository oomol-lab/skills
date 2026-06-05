# flomo · `memo_batch_get`

Fetch multiple flomo memos through the flomo Max MCP server in a single tool call.

- **Service**: `flomo`
- **Action**: `memo_batch_get`
- **Action id**: `flomo.memo_batch_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memo_batch_get"
```

## Run

```bash
oo connector run "flomo" --action "memo_batch_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
