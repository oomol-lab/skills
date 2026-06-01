# ClickUp · `remove_task_from_list`

Remove a ClickUp task from an additional list.

- **Service**: `clickup`
- **Action**: `remove_task_from_list`
- **Action id**: `clickup.remove_task_from_list`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "remove_task_from_list"
```

## Run

```bash
oo connector run "clickup" --action "remove_task_from_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
