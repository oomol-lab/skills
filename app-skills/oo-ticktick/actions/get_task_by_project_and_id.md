# TickTick · `get_task_by_project_and_id`

Get a TickTick task by project ID and task ID.

- **Service**: `ticktick`
- **Action**: `get_task_by_project_and_id`
- **Action id**: `ticktick.get_task_by_project_and_id`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "get_task_by_project_and_id"
```

## Run

```bash
oo connector run "ticktick" --action "get_task_by_project_and_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
