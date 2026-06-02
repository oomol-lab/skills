# Google Tasks · `list_all_tasks`

List tasks across every Google Tasks task list visible to the current connection.

- **Service**: `googletasks`
- **Action**: `list_all_tasks`
- **Action id**: `googletasks.list_all_tasks`
- **Required scopes**: googletasks.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "list_all_tasks"
```

## Run

```bash
oo connector run "googletasks" --action "list_all_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
