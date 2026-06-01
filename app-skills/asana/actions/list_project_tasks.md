# Asana · `list_project_tasks`

List tasks within an Asana project, ordered by project priority, with pagination support.

- **Service**: `asana`
- **Action**: `list_project_tasks`
- **Action id**: `asana.list_project_tasks`
- **Required scopes**: tasks:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "list_project_tasks"
```

## Run

```bash
oo connector run "asana" --action "list_project_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
