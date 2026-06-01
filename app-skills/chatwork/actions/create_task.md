# Chatwork · `create_task`

Create a task in a Chatwork room.

- **Service**: `chatwork`
- **Action**: `create_task`
- **Action id**: `chatwork.create_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "create_task"
```

## Run

```bash
oo connector run "chatwork" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Chatwork state. Confirm the exact payload and intended effect with the user before running.
