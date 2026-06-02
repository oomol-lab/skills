# Basin · `delete_form`

Delete a Basin form by ID.

- **Service**: `basin`
- **Action**: `delete_form`
- **Action id**: `basin.delete_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "delete_form"
```

## Run

```bash
oo connector run "basin" --action "delete_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Basin data. Always confirm the target and get explicit user approval before running.
