# VectorShift · `get_pipeline`

Fetch one VectorShift pipeline by pipeline ID or by pipeline name.

- **Service**: `vectorshift`
- **Action**: `get_pipeline`
- **Action id**: `vectorshift.get_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vectorshift" --action "get_pipeline"
```

## Run

```bash
oo connector run "vectorshift" --action "get_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
