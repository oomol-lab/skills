# Telegram Bot · `forward_message`

Forward a message from one chat to another.

- **Service**: `telegram`
- **Action**: `forward_message`
- **Action id**: `telegram.forward_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "forward_message"
```

## Run

```bash
oo connector run "telegram" --action "forward_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
