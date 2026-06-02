# ClickUp · `get_task_comments`

Get the comments on a ClickUp task.

- **Service**: `clickup`
- **Action**: `get_task_comments`
- **Action id**: `clickup.get_task_comments`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_task_comments"
```

## Run

```bash
oo connector run "clickup" --action "get_task_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
