# Habitica · `update_task`

Update one Habitica task by task ID or alias.

- **Service**: `habitica`
- **Action**: `update_task`
- **Action id**: `habitica.update_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "update_task"
```

## Run

```bash
oo connector run "habitica" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Habitica state. Confirm the exact payload and intended effect with the user before running.
