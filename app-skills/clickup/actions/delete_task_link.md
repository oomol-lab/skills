# ClickUp · `delete_task_link`

Delete a ClickUp task link from a task.

- **Service**: `clickup`
- **Action**: `delete_task_link`
- **Action id**: `clickup.delete_task_link`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_task_link"
```

## Run

```bash
oo connector run "clickup" --action "delete_task_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
