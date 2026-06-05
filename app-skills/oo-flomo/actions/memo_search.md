# flomo · `memo_search`

Search flomo memos through the flomo Max MCP server by keywords, tags, time range, or semantic search options.

- **Service**: `flomo`
- **Action**: `memo_search`
- **Action id**: `flomo.memo_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "memo_search"
```

## Run

```bash
oo connector run "flomo" --action "memo_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
