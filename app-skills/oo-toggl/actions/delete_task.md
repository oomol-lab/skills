# Toggl Track · `delete_task`

Delete a Toggl Track task by ID.

- **Service**: `toggl`
- **Action**: `delete_task`
- **Action id**: `toggl.delete_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "delete_task"
```

## Run

```bash
oo connector run "toggl" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Toggl Track data. Always confirm the target and get explicit user approval before running.
