# Clockify · `list_tasks`

List Clockify tasks for a project.

- **Service**: `clockify`
- **Action**: `list_tasks`
- **Action id**: `clockify.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "list_tasks"
```

## Run

```bash
oo connector run "clockify" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
