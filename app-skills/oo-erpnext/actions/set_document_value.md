# ERPNext · `set_document_value`

Set one field value on an ERPNext document and return the updated document.

- **Service**: `erpnext`
- **Action**: `set_document_value`
- **Action id**: `erpnext.set_document_value`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "set_document_value"
```

## Run

```bash
oo connector run "erpnext" --action "set_document_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ERPNext state. Confirm the exact payload and intended effect with the user before running.
