# ClickUp · `remove_tag_from_task`

Remove a ClickUp tag from a task.

- **Service**: `clickup`
- **Action**: `remove_tag_from_task`
- **Action id**: `clickup.remove_tag_from_task`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "remove_tag_from_task"
```

## Run

```bash
oo connector run "clickup" --action "remove_tag_from_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
