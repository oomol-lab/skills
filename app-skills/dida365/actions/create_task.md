# Dida365 · `create_task`

Create a Dida365 task under a project with optional schedule, reminders, recurrence, and checklist items.

- **Service**: `dida365`
- **Action**: `create_task`
- **Action id**: `dida365.create_task`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "create_task"
```

## Run

```bash
oo connector run "dida365" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dida365 state. Confirm the exact payload and intended effect with the user before running.
