# Dida365 · `delete_task`

Delete a Dida365 (滴答清单) task by project ID and task ID. The connector treats a missing task as already deleted.

- **Service**: `dida365`
- **Action**: `delete_task`
- **Action id**: `dida365.delete_task`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "delete_task"
```

## Run

```bash
oo connector run "dida365" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Dida365 data. Always confirm the target and get explicit user approval before running.
