# Dida365 · `list_all_tasks`

List undone Dida365 (滴答清单) tasks across projects. This is a connector-level aggregate helper over list-projects plus project-data fetches.

- **Service**: `dida365`
- **Action**: `list_all_tasks`
- **Action id**: `dida365.list_all_tasks`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "list_all_tasks"
```

## Run

```bash
oo connector run "dida365" --action "list_all_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
