# Dida365 · `complete_task`

Mark a Dida365 (滴答清单) task as completed by project ID and task ID.

- **Service**: `dida365`
- **Action**: `complete_task`
- **Action id**: `dida365.complete_task`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "complete_task"
```

## Run

```bash
oo connector run "dida365" --action "complete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
