# TickTick · `move_tasks`

Move one or more TickTick tasks between projects by using the official move endpoint.

- **Service**: `ticktick`
- **Action**: `move_tasks`
- **Action id**: `ticktick.move_tasks`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "move_tasks"
```

## Run

```bash
oo connector run "ticktick" --action "move_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
