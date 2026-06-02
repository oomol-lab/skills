# Postman · `delete_monitor`

Tool to delete a monitor by its ID. Use when you need to permanently remove a monitor from Postman. The monitor ID must be provided to identify which monitor to delete.

- **Service**: `postman`
- **Action**: `delete_monitor`
- **Action id**: `postman.delete_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_monitor"
```

## Run

```bash
oo connector run "postman" --action "delete_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
