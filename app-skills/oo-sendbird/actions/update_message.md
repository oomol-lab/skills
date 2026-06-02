# Sendbird · `update_message`

Update an existing Sendbird group channel message.

- **Service**: `sendbird`
- **Action**: `update_message`
- **Action id**: `sendbird.update_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "update_message"
```

## Run

```bash
oo connector run "sendbird" --action "update_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
