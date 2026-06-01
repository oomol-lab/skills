# Close · `list_tasks`

List Close tasks with lead, assignee, completion, and view filters.

- **Service**: `close`
- **Action**: `list_tasks`
- **Action id**: `close.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "list_tasks"
```

## Run

```bash
oo connector run "close" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
