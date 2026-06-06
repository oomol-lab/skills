# Motion · `list_tasks`

List Motion tasks with optional workspace, project, assignee, status, and cursor filters.

- **Service**: `motion`
- **Action**: `list_tasks`
- **Action id**: `motion.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_tasks"
```

## Run

```bash
oo connector run "motion" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
