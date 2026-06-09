# Quo · `send_text_message`

Send a text message from a Quo phone number.

- **Service**: `quo`
- **Action**: `send_text_message`
- **Action id**: `quo.send_text_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "send_text_message"
```

## Run

```bash
oo connector run "quo" --action "send_text_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Quo state. Confirm the exact payload and intended effect with the user before running.
