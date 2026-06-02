# Docparser · `get_document_status`

Retrieve the import, preprocessing, parsing, and webhook-dispatch status of one Docparser document.

- **Service**: `docparser`
- **Action**: `get_document_status`
- **Action id**: `docparser.get_document_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "get_document_status"
```

## Run

```bash
oo connector run "docparser" --action "get_document_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
