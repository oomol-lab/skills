# ClickUp · `create_task_comment`

Create a comment on a ClickUp task.

- **Service**: `clickup`
- **Action**: `create_task_comment`
- **Action id**: `clickup.create_task_comment`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "create_task_comment"
```

## Run

```bash
oo connector run "clickup" --action "create_task_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
