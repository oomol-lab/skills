# Telegram Bot · `get_chat_administrators`

Return the chat administrators visible to the bot.

- **Service**: `telegram`
- **Action**: `get_chat_administrators`
- **Action id**: `telegram.get_chat_administrators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_chat_administrators"
```

## Run

```bash
oo connector run "telegram" --action "get_chat_administrators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
