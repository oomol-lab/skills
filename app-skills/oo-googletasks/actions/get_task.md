# Google Tasks · `get_task`

Fetch a Google Tasks task by task list ID and task ID.

- **Service**: `googletasks`
- **Action**: `get_task`
- **Action id**: `googletasks.get_task`
- **Required scopes**: googletasks.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "get_task"
```

## Run

```bash
oo connector run "googletasks" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
