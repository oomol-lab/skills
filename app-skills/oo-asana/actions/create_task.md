# Asana · `create_task`

Create a new Asana task in a project with optional assignee, notes, dates, and custom fields.

- **Service**: `asana`
- **Action**: `create_task`
- **Action id**: `asana.create_task`
- **Required scopes**: tasks:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "create_task"
```

## Run

```bash
oo connector run "asana" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Asana state. Confirm the exact payload and intended effect with the user before running.
