# Todoist · `list_projects`

List active Todoist projects with optional folder, workspace, and cursor filters.

- **Service**: `todoist`
- **Action**: `list_projects`
- **Action id**: `todoist.list_projects`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "list_projects"
```

## Run

```bash
oo connector run "todoist" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
