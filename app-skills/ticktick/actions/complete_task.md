# TickTick · `complete_task`

Mark a TickTick task as completed by project ID and task ID.

- **Service**: `ticktick`
- **Action**: `complete_task`
- **Action id**: `ticktick.complete_task`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "complete_task"
```

## Run

```bash
oo connector run "ticktick" --action "complete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
