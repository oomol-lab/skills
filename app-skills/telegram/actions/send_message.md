# Telegram Bot · `send_message`

Send a text message to a chat, group, supergroup, channel, or forum topic.

- **Service**: `telegram`
- **Action**: `send_message`
- **Action id**: `telegram.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "send_message"
```

## Run

```bash
oo connector run "telegram" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
