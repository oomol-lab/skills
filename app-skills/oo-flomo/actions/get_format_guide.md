# flomo · `get_format_guide`

Fetch flomo memo formatting guidance through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `get_format_guide`
- **Action id**: `flomo.get_format_guide`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "get_format_guide"
```

## Run

```bash
oo connector run "flomo" --action "get_format_guide" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
