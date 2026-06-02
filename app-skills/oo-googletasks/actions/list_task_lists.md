# Google Tasks · `list_task_lists`

List Google Tasks task lists visible to the current connection.

- **Service**: `googletasks`
- **Action**: `list_task_lists`
- **Action id**: `googletasks.list_task_lists`
- **Required scopes**: googletasks.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "list_task_lists"
```

## Run

```bash
oo connector run "googletasks" --action "list_task_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
