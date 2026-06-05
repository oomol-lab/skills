# flomo · `get_daily_review`

Fetch flomo daily review content through the flomo Max MCP server.

- **Service**: `flomo`
- **Action**: `get_daily_review`
- **Action id**: `flomo.get_daily_review`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "get_daily_review"
```

## Run

```bash
oo connector run "flomo" --action "get_daily_review" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
