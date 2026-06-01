# Todoist · `create_task`

Create a Todoist task with optional project, section, parent, labels, assignment, due date, deadline, and duration fields.

- **Service**: `todoist`
- **Action**: `create_task`
- **Action id**: `todoist.create_task`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "create_task"
```

## Run

```bash
oo connector run "todoist" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
