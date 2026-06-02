# Plausible Analytics · `query_stats`

Query historical or real-time analytics for a Plausible site using the Stats API v2.

- **Service**: `plausible_analytics`
- **Action**: `query_stats`
- **Action id**: `plausible_analytics.query_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plausible_analytics" --action "query_stats"
```

## Run

```bash
oo connector run "plausible_analytics" --action "query_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
