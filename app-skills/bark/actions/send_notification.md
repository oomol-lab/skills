# Bark · `send_notification`

Send a notification to the connected Bark device through the REST push endpoint.

- **Service**: `bark`
- **Action**: `send_notification`
- **Action id**: `bark.send_notification`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bark" --action "send_notification"
```

## Run

```bash
oo connector run "bark" --action "send_notification" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bark state. Confirm the exact payload and intended effect with the user before running.
