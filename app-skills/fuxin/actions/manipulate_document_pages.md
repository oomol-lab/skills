# Foxit Cloud API · `manipulate_document_pages`

Delete, rotate, or move PDF pages with Foxit.

- **Service**: `fuxin`
- **Action**: `manipulate_document_pages`
- **Action id**: `fuxin.manipulate_document_pages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "manipulate_document_pages"
```

## Run

```bash
oo connector run "fuxin" --action "manipulate_document_pages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
