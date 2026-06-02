# Worksnaps · `list_project_tasks`

List tasks that belong to one Worksnaps project.

- **Service**: `worksnaps`
- **Action**: `list_project_tasks`
- **Action id**: `worksnaps.list_project_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "list_project_tasks"
```

## Run

```bash
oo connector run "worksnaps" --action "list_project_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
