# Basin · `delete_project`

Delete a Basin project by ID.

- **Service**: `basin`
- **Action**: `delete_project`
- **Action id**: `basin.delete_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "delete_project"
```

## Run

```bash
oo connector run "basin" --action "delete_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Basin data. Always confirm the target and get explicit user approval before running.
