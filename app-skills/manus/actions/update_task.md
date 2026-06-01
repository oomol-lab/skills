# Manus · `update_task`

Update a Manus task title, sharing visibility, or task-list visibility.

- **Service**: `manus`
- **Action**: `update_task`
- **Action id**: `manus.update_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "update_task"
```

## Run

```bash
oo connector run "manus" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Manus state. Confirm the exact payload and intended effect with the user before running.
