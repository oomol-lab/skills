# ERPNext · `delete_document`

Delete one ERPNext document by DocType and name.

- **Service**: `erpnext`
- **Action**: `delete_document`
- **Action id**: `erpnext.delete_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "delete_document"
```

## Run

```bash
oo connector run "erpnext" --action "delete_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ERPNext data. Always confirm the target and get explicit user approval before running.
