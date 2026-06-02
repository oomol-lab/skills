# Chatwork · `update_message`

Update one message in a Chatwork room.

- **Service**: `chatwork`
- **Action**: `update_message`
- **Action id**: `chatwork.update_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "update_message"
```

## Run

```bash
oo connector run "chatwork" --action "update_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Chatwork state. Confirm the exact payload and intended effect with the user before running.
