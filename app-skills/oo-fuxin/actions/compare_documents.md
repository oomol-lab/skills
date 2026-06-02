# Foxit Cloud API · `compare_documents`

Compare two PDF documents with Foxit and submit a diff task.

- **Service**: `fuxin`
- **Action**: `compare_documents`
- **Action id**: `fuxin.compare_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "compare_documents"
```

## Run

```bash
oo connector run "fuxin" --action "compare_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
