# flomo · `get_tag_guide`

Fetch flomo tag usage guidance through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `get_tag_guide`
- **Action id**: `flomo.get_tag_guide`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "get_tag_guide"
```

## Run

```bash
oo connector run "flomo" --action "get_tag_guide" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
