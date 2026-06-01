# Harvest · `get_task`

Get a single Harvest task by ID.

- **Service**: `harvest`
- **Action**: `get_task`
- **Action id**: `harvest.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "get_task"
```

## Run

```bash
oo connector run "harvest" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
