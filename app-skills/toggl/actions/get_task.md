# Toggl Track · `get_task`

Get a single Toggl Track task by ID.

- **Service**: `toggl`
- **Action**: `get_task`
- **Action id**: `toggl.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "get_task"
```

## Run

```bash
oo connector run "toggl" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
