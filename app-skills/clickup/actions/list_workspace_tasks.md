# ClickUp · `list_workspace_tasks`

List the ClickUp tasks in a workspace with official filter parameters.

- **Service**: `clickup`
- **Action**: `list_workspace_tasks`
- **Action id**: `clickup.list_workspace_tasks`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_workspace_tasks"
```

## Run

```bash
oo connector run "clickup" --action "list_workspace_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
