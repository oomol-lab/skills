# Everhour · `list_project_tasks`

List the tasks in one Everhour project with optional paging and search filters.

- **Service**: `everhour`
- **Action**: `list_project_tasks`
- **Action id**: `everhour.list_project_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "list_project_tasks"
```

## Run

```bash
oo connector run "everhour" --action "list_project_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
