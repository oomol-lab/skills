# Simple Analytics · `export_data_points`

Export raw datapoints from the Simple Analytics Export API.

- **Service**: `simple_analytics`
- **Action**: `export_data_points`
- **Action id**: `simple_analytics.export_data_points`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "simple_analytics" --action "export_data_points"
```

## Run

```bash
oo connector run "simple_analytics" --action "export_data_points" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
