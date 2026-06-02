# Bark · `send_batch_notifications`

Send the same notification to multiple explicit Bark device keys through the REST push endpoint.

- **Service**: `bark`
- **Action**: `send_batch_notifications`
- **Action id**: `bark.send_batch_notifications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bark" --action "send_batch_notifications"
```

## Run

```bash
oo connector run "bark" --action "send_batch_notifications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bark state. Confirm the exact payload and intended effect with the user before running.
