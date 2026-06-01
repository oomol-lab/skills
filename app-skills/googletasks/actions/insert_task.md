# Google Tasks · `insert_task`

Create a task in a Google Tasks task list.

- **Service**: `googletasks`
- **Action**: `insert_task`
- **Action id**: `googletasks.insert_task`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "insert_task"
```

## Run

```bash
oo connector run "googletasks" --action "insert_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Tasks state. Confirm the exact payload and intended effect with the user before running.
