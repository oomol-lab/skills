# flomo · `memo_recommended`

Find flomo memos related to a target memo through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `memo_recommended`
- **Action id**: `flomo.memo_recommended`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memo_recommended"
```

## Run

```bash
oo connector run "flomo" --action "memo_recommended" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
