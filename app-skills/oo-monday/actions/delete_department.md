# Monday · `delete_department`

Delete a Monday department on an enterprise account.

- **Service**: `monday`
- **Action**: `delete_department`
- **Action id**: `monday.delete_department`
- **Required scopes**: departments:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "delete_department"
```

## Run

```bash
oo connector run "monday" --action "delete_department" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
