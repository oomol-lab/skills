# flomo · `tag_search`

Search flomo tags through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `tag_search`
- **Action id**: `flomo.tag_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "tag_search"
```

## Run

```bash
oo connector run "flomo" --action "tag_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
