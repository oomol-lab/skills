# Ably · `create_channel`

Activate an Ably channel by retrieving its metadata.

- **Service**: `ably`
- **Action**: `create_channel`
- **Action id**: `ably.create_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ably" --action "create_channel"
```

## Run

```bash
oo connector run "ably" --action "create_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ably state. Confirm the exact payload and intended effect with the user before running.
