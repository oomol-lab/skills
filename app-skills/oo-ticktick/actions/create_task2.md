# TickTick · `create_task2`

Create a TickTick task under a project. This deprecated compatibility alias maps to the same official create-task API as create_task.

- **Service**: `ticktick`
- **Action**: `create_task2`
- **Action id**: `ticktick.create_task2`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "create_task2"
```

## Run

```bash
oo connector run "ticktick" --action "create_task2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
