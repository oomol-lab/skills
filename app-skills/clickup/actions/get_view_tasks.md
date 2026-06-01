# ClickUp · `get_view_tasks`

Get the visible ClickUp tasks in a view.

- **Service**: `clickup`
- **Action**: `get_view_tasks`
- **Action id**: `clickup.get_view_tasks`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_view_tasks"
```

## Run

```bash
oo connector run "clickup" --action "get_view_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
