# Seqera · `get_pipeline`

Retrieve one Seqera pipeline by pipeline ID.

- **Service**: `seqera`
- **Action**: `get_pipeline`
- **Action id**: `seqera.get_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "get_pipeline"
```

## Run

```bash
oo connector run "seqera" --action "get_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
