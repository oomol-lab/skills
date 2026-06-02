# Docsumo · `get_documents_summary`

Get the Docsumo documents summary grouped by document type, including disabled types and status counts.

- **Service**: `docsumo`
- **Action**: `get_documents_summary`
- **Action id**: `docsumo.get_documents_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "get_documents_summary"
```

## Run

```bash
oo connector run "docsumo" --action "get_documents_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
