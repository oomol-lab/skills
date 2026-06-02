# Docsumo · `get_document_detail`

Get Docsumo document detail metadata for one document, including page information and preview assets.

- **Service**: `docsumo`
- **Action**: `get_document_detail`
- **Action id**: `docsumo.get_document_detail`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "get_document_detail"
```

## Run

```bash
oo connector run "docsumo" --action "get_document_detail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
