# Pushover · `send_message`

Send a Pushover notification to a user or delivery group, with optional emergency settings, URL metadata, and image attachment.

- **Service**: `pushover`
- **Action**: `send_message`
- **Action id**: `pushover.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "send_message"
```

## Run

```bash
oo connector run "pushover" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
