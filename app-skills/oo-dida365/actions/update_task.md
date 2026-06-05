# Dida365 · `update_task`

Update a Dida365 (滴答清单) task by task ID and project ID, including checklist items and recurrence fields.

- **Service**: `dida365`
- **Action**: `update_task`
- **Action id**: `dida365.update_task`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "update_task"
```

## Run

```bash
oo connector run "dida365" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dida365 state. Confirm the exact payload and intended effect with the user before running.
