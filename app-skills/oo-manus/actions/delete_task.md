# Manus · `delete_task`

Permanently delete a stopped Manus task. Stop a running task before deleting it.

- **Service**: `manus`
- **Action**: `delete_task`
- **Action id**: `manus.delete_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "delete_task"
```

## Run

```bash
oo connector run "manus" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Manus data. Always confirm the target and get explicit user approval before running.
