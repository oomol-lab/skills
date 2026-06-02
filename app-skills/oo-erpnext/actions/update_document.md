# ERPNext · `update_document`

Update selected fields on one ERPNext document.

- **Service**: `erpnext`
- **Action**: `update_document`
- **Action id**: `erpnext.update_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "update_document"
```

## Run

```bash
oo connector run "erpnext" --action "update_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ERPNext state. Confirm the exact payload and intended effect with the user before running.
