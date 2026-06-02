# ERPNext · `get_document_count`

Get the count of ERPNext documents that match an optional filter.

- **Service**: `erpnext`
- **Action**: `get_document_count`
- **Action id**: `erpnext.get_document_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "get_document_count"
```

## Run

```bash
oo connector run "erpnext" --action "get_document_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
