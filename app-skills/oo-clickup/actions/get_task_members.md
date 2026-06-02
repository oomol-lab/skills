# ClickUp · `get_task_members`

Get the ClickUp members with explicit access to a task.

- **Service**: `clickup`
- **Action**: `get_task_members`
- **Action id**: `clickup.get_task_members`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_task_members"
```

## Run

```bash
oo connector run "clickup" --action "get_task_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
