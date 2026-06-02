# ERPNext · `create_document`

Create one ERPNext document for the specified DocType.

- **Service**: `erpnext`
- **Action**: `create_document`
- **Action id**: `erpnext.create_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "create_document"
```

## Run

```bash
oo connector run "erpnext" --action "create_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ERPNext state. Confirm the exact payload and intended effect with the user before running.
