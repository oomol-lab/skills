# Todoist · `get_task`

Get a Todoist task by task ID.

- **Service**: `todoist`
- **Action**: `get_task`
- **Action id**: `todoist.get_task`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "get_task"
```

## Run

```bash
oo connector run "todoist" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
