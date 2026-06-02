# Toggl Track · `list_tasks`

List Toggl Track tasks for a project.

- **Service**: `toggl`
- **Action**: `list_tasks`
- **Action id**: `toggl.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "list_tasks"
```

## Run

```bash
oo connector run "toggl" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
