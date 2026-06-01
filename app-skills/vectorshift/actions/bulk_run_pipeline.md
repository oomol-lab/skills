# VectorShift · `bulk_run_pipeline`

Run multiple instances of the same VectorShift pipeline with JSON-safe inputs in one request.

- **Service**: `vectorshift`
- **Action**: `bulk_run_pipeline`
- **Action id**: `vectorshift.bulk_run_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vectorshift" --action "bulk_run_pipeline"
```

## Run

```bash
oo connector run "vectorshift" --action "bulk_run_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
