# Monday · `delete_doc`

Delete an existing Monday doc.

- **Service**: `monday`
- **Action**: `delete_doc`
- **Action id**: `monday.delete_doc`
- **Required scopes**: docs:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "delete_doc"
```

## Run

```bash
oo connector run "monday" --action "delete_doc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
