# Sendbird · `send_message`

Send a message into a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `send_message`
- **Action id**: `sendbird.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "send_message"
```

## Run

```bash
oo connector run "sendbird" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
