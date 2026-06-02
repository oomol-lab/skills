# Apollo · `get_api_usage_stats`

Retrieve Apollo API usage statistics for the current team and key.

- **Service**: `apollo`
- **Action**: `get_api_usage_stats`
- **Action id**: `apollo.get_api_usage_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apollo" --action "get_api_usage_stats"
```

## Run

```bash
oo connector run "apollo" --action "get_api_usage_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
