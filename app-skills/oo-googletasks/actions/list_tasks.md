# Google Tasks · `list_tasks`

List tasks from a Google Tasks task list.

- **Service**: `googletasks`
- **Action**: `list_tasks`
- **Action id**: `googletasks.list_tasks`
- **Required scopes**: googletasks.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "list_tasks"
```

## Run

```bash
oo connector run "googletasks" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
