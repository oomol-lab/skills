# ClickUp · `get_task`

Get a ClickUp task by task ID.

- **Service**: `clickup`
- **Action**: `get_task`
- **Action id**: `clickup.get_task`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_task"
```

## Run

```bash
oo connector run "clickup" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
