# Close · `get_task`

Fetch a single Close task by ID.

- **Service**: `close`
- **Action**: `get_task`
- **Action id**: `close.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "get_task"
```

## Run

```bash
oo connector run "close" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
