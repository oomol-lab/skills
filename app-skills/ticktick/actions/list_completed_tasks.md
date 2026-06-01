# TickTick · `list_completed_tasks`

List completed TickTick tasks within optional project and date filters by using the official completed-tasks endpoint.

- **Service**: `ticktick`
- **Action**: `list_completed_tasks`
- **Action id**: `ticktick.list_completed_tasks`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "list_completed_tasks"
```

## Run

```bash
oo connector run "ticktick" --action "list_completed_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
