# Todoist · `close_task`

Mark a Todoist task complete. Recurring tasks advance to their next occurrence.

- **Service**: `todoist`
- **Action**: `close_task`
- **Action id**: `todoist.close_task`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "close_task"
```

## Run

```bash
oo connector run "todoist" --action "close_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
