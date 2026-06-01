# Dida365 · `move_tasks`

Move one or more Dida365 tasks between projects by using the official move endpoint.

- **Service**: `dida365`
- **Action**: `move_tasks`
- **Action id**: `dida365.move_tasks`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "move_tasks"
```

## Run

```bash
oo connector run "dida365" --action "move_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dida365 state. Confirm the exact payload and intended effect with the user before running.
