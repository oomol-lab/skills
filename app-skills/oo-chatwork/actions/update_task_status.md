# Chatwork · `update_task_status`

Update the completion status of one Chatwork task.

- **Service**: `chatwork`
- **Action**: `update_task_status`
- **Action id**: `chatwork.update_task_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "update_task_status"
```

## Run

```bash
oo connector run "chatwork" --action "update_task_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Chatwork state. Confirm the exact payload and intended effect with the user before running.
