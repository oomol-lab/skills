# Telegram Bot · `send_location`

Send a map location to a chat.

- **Service**: `telegram`
- **Action**: `send_location`
- **Action id**: `telegram.send_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "send_location"
```

## Run

```bash
oo connector run "telegram" --action "send_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
