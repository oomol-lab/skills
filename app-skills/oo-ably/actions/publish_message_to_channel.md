# Ably · `publish_message_to_channel`

Publish one message to an Ably channel.

- **Service**: `ably`
- **Action**: `publish_message_to_channel`
- **Action id**: `ably.publish_message_to_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "publish_message_to_channel"
```

## Run

```bash
oo connector run "ably" --action "publish_message_to_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ably state. Confirm the exact payload and intended effect with the user before running.
