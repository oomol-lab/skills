# VectorShift · `list_pipelines`

List VectorShift pipelines that are accessible to the connected API key.

- **Service**: `vectorshift`
- **Action**: `list_pipelines`
- **Action id**: `vectorshift.list_pipelines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vectorshift" --action "list_pipelines"
```

## Run

```bash
oo connector run "vectorshift" --action "list_pipelines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
