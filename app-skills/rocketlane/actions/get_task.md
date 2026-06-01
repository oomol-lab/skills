# Rocketlane · `get_task`

Get one Rocketlane task by numeric task ID.

- **Service**: `rocketlane`
- **Action**: `get_task`
- **Action id**: `rocketlane.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rocketlane" --action "get_task"
```

## Run

```bash
oo connector run "rocketlane" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
