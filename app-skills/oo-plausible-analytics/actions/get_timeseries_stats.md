# Plausible Analytics · `get_timeseries_stats`

Query Plausible analytics as a timeseries grouped by a time dimension such as day or hour.

- **Service**: `plausible_analytics`
- **Action**: `get_timeseries_stats`
- **Action id**: `plausible_analytics.get_timeseries_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plausible_analytics" --action "get_timeseries_stats"
```

## Run

```bash
oo connector run "plausible_analytics" --action "get_timeseries_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
