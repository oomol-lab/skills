# ERPNext · `list_documents`

List ERPNext documents for a DocType with optional field selection, filters, sorting, and pagination.

- **Service**: `erpnext`
- **Action**: `list_documents`
- **Action id**: `erpnext.list_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "list_documents"
```

## Run

```bash
oo connector run "erpnext" --action "list_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
