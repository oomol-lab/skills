# Todoist · `list_tasks`

List active Todoist tasks with optional project, section, parent, label, goal, ID, and cursor filters.

- **Service**: `todoist`
- **Action**: `list_tasks`
- **Action id**: `todoist.list_tasks`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "list_tasks"
```

## Run

```bash
oo connector run "todoist" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
