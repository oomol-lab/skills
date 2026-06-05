# Dida365 · `get_task_by_project_and_id`

Get a Dida365 (滴答清单) task by project ID and task ID.

- **Service**: `dida365`
- **Action**: `get_task_by_project_and_id`
- **Action id**: `dida365.get_task_by_project_and_id`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "get_task_by_project_and_id"
```

## Run

```bash
oo connector run "dida365" --action "get_task_by_project_and_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
