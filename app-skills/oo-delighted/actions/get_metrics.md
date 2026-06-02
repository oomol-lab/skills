# Delighted · `get_metrics`

Retrieve Net Promoter Score and related metrics from Delighted.

- **Service**: `delighted`
- **Action**: `get_metrics`
- **Action id**: `delighted.get_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "get_metrics"
```

## Run

```bash
oo connector run "delighted" --action "get_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
