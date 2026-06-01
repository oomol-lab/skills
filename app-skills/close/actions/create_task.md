# Close · `create_task`

Create a lead-scoped Close task.

- **Service**: `close`
- **Action**: `create_task`
- **Action id**: `close.create_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "create_task"
```

## Run

```bash
oo connector run "close" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Close state. Confirm the exact payload and intended effect with the user before running.
