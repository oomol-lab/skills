# TickTick · `list_all_tasks`

List undone TickTick tasks across projects. This is a connector-level aggregate helper over list-projects plus project-data fetches.

- **Service**: `ticktick`
- **Action**: `list_all_tasks`
- **Action id**: `ticktick.list_all_tasks`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "list_all_tasks"
```

## Run

```bash
oo connector run "ticktick" --action "list_all_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
