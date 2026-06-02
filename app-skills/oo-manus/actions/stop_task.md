# Manus · `stop_task`

Stop a running Manus task.

- **Service**: `manus`
- **Action**: `stop_task`
- **Action id**: `manus.stop_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "stop_task"
```

## Run

```bash
oo connector run "manus" --action "stop_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
