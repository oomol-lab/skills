# TickTick · `filter_tasks`

Filter TickTick tasks by project, date range, priority, tags, and status by using the official filter endpoint.

- **Service**: `ticktick`
- **Action**: `filter_tasks`
- **Action id**: `ticktick.filter_tasks`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "filter_tasks"
```

## Run

```bash
oo connector run "ticktick" --action "filter_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
