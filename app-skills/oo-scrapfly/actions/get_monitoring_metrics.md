# Scrapfly · `get_monitoring_metrics`

Retrieve Scrapfly monitoring metrics for the connected API key.

- **Service**: `scrapfly`
- **Action**: `get_monitoring_metrics`
- **Action id**: `scrapfly.get_monitoring_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapfly" --action "get_monitoring_metrics"
```

## Run

```bash
oo connector run "scrapfly" --action "get_monitoring_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
