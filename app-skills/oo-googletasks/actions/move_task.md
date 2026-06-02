# Google Tasks · `move_task`

Move a Google Tasks task within a list or into another task list.

- **Service**: `googletasks`
- **Action**: `move_task`
- **Action id**: `googletasks.move_task`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "move_task"
```

## Run

```bash
oo connector run "googletasks" --action "move_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Tasks state. Confirm the exact payload and intended effect with the user before running.
