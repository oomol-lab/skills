# Google Tasks · `update_task`

Deprecated alias for update_task_full. Fully replace the mutable fields of a Google Tasks task.

- **Service**: `googletasks`
- **Action**: `update_task`
- **Action id**: `googletasks.update_task`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "update_task"
```

## Run

```bash
oo connector run "googletasks" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Tasks state. Confirm the exact payload and intended effect with the user before running.
