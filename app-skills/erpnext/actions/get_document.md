# ERPNext · `get_document`

Get one ERPNext document by DocType and name.

- **Service**: `erpnext`
- **Action**: `get_document`
- **Action id**: `erpnext.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "get_document"
```

## Run

```bash
oo connector run "erpnext" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
