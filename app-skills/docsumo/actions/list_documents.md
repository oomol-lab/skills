# Docsumo · `list_documents`

List Docsumo documents with optional folder, type, status, search, sorting, and created-date filters.

- **Service**: `docsumo`
- **Action**: `list_documents`
- **Action id**: `docsumo.list_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "list_documents"
```

## Run

```bash
oo connector run "docsumo" --action "list_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
