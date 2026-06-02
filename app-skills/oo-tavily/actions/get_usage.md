# Tavily · `get_usage`

Get API key and account usage details from Tavily.

- **Service**: `tavily`
- **Action**: `get_usage`
- **Action id**: `tavily.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tavily" --action "get_usage"
```

## Run

```bash
oo connector run "tavily" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
