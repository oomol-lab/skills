# Motion · `delete_task`

Delete a Motion task by ID.

- **Service**: `motion`
- **Action**: `delete_task`
- **Action id**: `motion.delete_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "delete_task"
```

## Run

```bash
oo connector run "motion" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Motion data. Always confirm the target and get explicit user approval before running.
