# ClickUp · `list_list_tasks`

List the ClickUp tasks in a list with optional filters.

- **Service**: `clickup`
- **Action**: `list_list_tasks`
- **Action id**: `clickup.list_list_tasks`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_list_tasks"
```

## Run

```bash
oo connector run "clickup" --action "list_list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
