# Telegram Bot · `edit_message_text`

Edit the text of a previously sent message or an inline message.

- **Service**: `telegram`
- **Action**: `edit_message_text`
- **Action id**: `telegram.edit_message_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "edit_message_text"
```

## Run

```bash
oo connector run "telegram" --action "edit_message_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
