# Harvest · `list_project_task_assignments`

List task assignments for a specific Harvest project.

- **Service**: `harvest`
- **Action**: `list_project_task_assignments`
- **Action id**: `harvest.list_project_task_assignments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "list_project_task_assignments"
```

## Run

```bash
oo connector run "harvest" --action "list_project_task_assignments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
