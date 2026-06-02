# Dida365 · `list_completed_tasks`

List completed Dida365 tasks within optional project and date filters by using the official completed-tasks endpoint.

- **Service**: `dida365`
- **Action**: `list_completed_tasks`
- **Action id**: `dida365.list_completed_tasks`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "list_completed_tasks"
```

## Run

```bash
oo connector run "dida365" --action "list_completed_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
