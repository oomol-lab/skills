# VectorShift · `run_pipeline`

Run one VectorShift pipeline with JSON-safe inputs and return the resulting outputs.

- **Service**: `vectorshift`
- **Action**: `run_pipeline`
- **Action id**: `vectorshift.run_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vectorshift" --action "run_pipeline"
```

## Run

```bash
oo connector run "vectorshift" --action "run_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
