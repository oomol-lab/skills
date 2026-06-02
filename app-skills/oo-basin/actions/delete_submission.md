# Basin · `delete_submission`

Delete a Basin submission by ID.

- **Service**: `basin`
- **Action**: `delete_submission`
- **Action id**: `basin.delete_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "delete_submission"
```

## Run

```bash
oo connector run "basin" --action "delete_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Basin data. Always confirm the target and get explicit user approval before running.
