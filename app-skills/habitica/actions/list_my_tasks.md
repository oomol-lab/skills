# Habitica · `list_my_tasks`

List the authenticated Habitica user's tasks with optional type and dueDate filters.

- **Service**: `habitica`
- **Action**: `list_my_tasks`
- **Action id**: `habitica.list_my_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "list_my_tasks"
```

## Run

```bash
oo connector run "habitica" --action "list_my_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
