# ERPNext · `get_document_value`

Get one ERPNext field value or a group of field values without loading the full document.

- **Service**: `erpnext`
- **Action**: `get_document_value`
- **Action id**: `erpnext.get_document_value`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "get_document_value"
```

## Run

```bash
oo connector run "erpnext" --action "get_document_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
