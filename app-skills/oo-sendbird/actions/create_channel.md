# Sendbird · `create_channel`

Create a Sendbird group channel with common JSON body fields.

- **Service**: `sendbird`
- **Action**: `create_channel`
- **Action id**: `sendbird.create_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "create_channel"
```

## Run

```bash
oo connector run "sendbird" --action "create_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
