# Telegram Bot · `send_poll`

Send a native Telegram poll to a chat.

- **Service**: `telegram`
- **Action**: `send_poll`
- **Action id**: `telegram.send_poll`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "send_poll"
```

## Run

```bash
oo connector run "telegram" --action "send_poll" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
