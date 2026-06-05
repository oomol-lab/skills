# flomo · `tag_tree`

Fetch the flomo tag tree through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `tag_tree`
- **Action id**: `flomo.tag_tree`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "tag_tree"
```

## Run

```bash
oo connector run "flomo" --action "tag_tree" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
