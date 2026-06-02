# Telegram Bot · `get_chat_history`

Get chat history by polling getUpdates, filtering to one chat, and returning message-bearing updates only. This helper requires webhook delivery to be disabled.

- **Service**: `telegram`
- **Action**: `get_chat_history`
- **Action id**: `telegram.get_chat_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_chat_history"
```

## Run

```bash
oo connector run "telegram" --action "get_chat_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
