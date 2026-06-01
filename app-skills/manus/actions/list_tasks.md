# Manus · `list_tasks`

List Manus tasks with optional scope filters and cursor pagination.

- **Service**: `manus`
- **Action**: `list_tasks`
- **Action id**: `manus.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_tasks"
```

## Run

```bash
oo connector run "manus" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
