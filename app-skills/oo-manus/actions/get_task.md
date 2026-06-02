# Manus · `get_task`

Retrieve a Manus task's current status and metadata.

- **Service**: `manus`
- **Action**: `get_task`
- **Action id**: `manus.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "get_task"
```

## Run

```bash
oo connector run "manus" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
