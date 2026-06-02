# Habitica · `create_task`

Create one new personal Habitica task from a single JSON task object.

- **Service**: `habitica`
- **Action**: `create_task`
- **Action id**: `habitica.create_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "create_task"
```

## Run

```bash
oo connector run "habitica" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Habitica state. Confirm the exact payload and intended effect with the user before running.
