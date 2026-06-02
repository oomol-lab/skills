# Manus · `list_task_messages`

List Manus task event messages with cursor pagination.

- **Service**: `manus`
- **Action**: `list_task_messages`
- **Action id**: `manus.list_task_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_task_messages"
```

## Run

```bash
oo connector run "manus" --action "list_task_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
