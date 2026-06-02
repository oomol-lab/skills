# TickTick · `delete_task`

Delete a TickTick task by project ID and task ID. The connector treats a missing task as already deleted.

- **Service**: `ticktick`
- **Action**: `delete_task`
- **Action id**: `ticktick.delete_task`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "delete_task"
```

## Run

```bash
oo connector run "ticktick" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites TickTick data. Always confirm the target and get explicit user approval before running.
