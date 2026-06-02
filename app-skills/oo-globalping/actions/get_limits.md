# Globalping · `get_limits`

Get the current Globalping authenticated rate limits and remaining user credits.

- **Service**: `globalping`
- **Action**: `get_limits`
- **Action id**: `globalping.get_limits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "globalping" --action "get_limits"
```

## Run

```bash
oo connector run "globalping" --action "get_limits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
