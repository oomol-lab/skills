# Monday · `delete_update`

Delete an existing Monday update.

- **Service**: `monday`
- **Action**: `delete_update`
- **Action id**: `monday.delete_update`
- **Required scopes**: updates:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "delete_update"
```

## Run

```bash
oo connector run "monday" --action "delete_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
