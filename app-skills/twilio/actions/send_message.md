# Twilio · `send_message`

Send an outbound SMS or MMS message with Twilio.

- **Service**: `twilio`
- **Action**: `send_message`
- **Action id**: `twilio.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twilio" --action "send_message"
```

## Run

```bash
oo connector run "twilio" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twilio state. Confirm the exact payload and intended effect with the user before running.
