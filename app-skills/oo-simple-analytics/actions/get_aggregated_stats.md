# Simple Analytics · `get_aggregated_stats`

Get aggregated website statistics from the Simple Analytics Stats API.

- **Service**: `simple_analytics`
- **Action**: `get_aggregated_stats`
- **Action id**: `simple_analytics.get_aggregated_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "simple_analytics" --action "get_aggregated_stats"
```

## Run

```bash
oo connector run "simple_analytics" --action "get_aggregated_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
