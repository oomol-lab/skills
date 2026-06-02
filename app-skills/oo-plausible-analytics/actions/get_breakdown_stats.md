# Plausible Analytics · `get_breakdown_stats`

Query Plausible analytics grouped by a single dimension such as source, page, country, or browser.

- **Service**: `plausible_analytics`
- **Action**: `get_breakdown_stats`
- **Action id**: `plausible_analytics.get_breakdown_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plausible_analytics" --action "get_breakdown_stats"
```

## Run

```bash
oo connector run "plausible_analytics" --action "get_breakdown_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
