# Google Tasks · `get_task_list`

Fetch a Google Tasks task list by ID.

- **Service**: `googletasks`
- **Action**: `get_task_list`
- **Action id**: `googletasks.get_task_list`
- **Required scopes**: googletasks.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "get_task_list"
```

## Run

```bash
oo connector run "googletasks" --action "get_task_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
