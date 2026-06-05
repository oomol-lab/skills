# Dida365 · `filter_tasks`

Filter Dida365 (滴答清单) tasks by project, date range, priority, tags, and status by using the official filter endpoint.

- **Service**: `dida365`
- **Action**: `filter_tasks`
- **Action id**: `dida365.filter_tasks`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "filter_tasks"
```

## Run

```bash
oo connector run "dida365" --action "filter_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
