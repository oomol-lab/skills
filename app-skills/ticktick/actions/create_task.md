# TickTick · `create_task`

Create a TickTick task under a project with optional schedule, reminders, recurrence, and checklist items.

- **Service**: `ticktick`
- **Action**: `create_task`
- **Action id**: `ticktick.create_task`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "create_task"
```

## Run

```bash
oo connector run "ticktick" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
