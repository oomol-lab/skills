# Telegram Bot · `get_chat`

Return metadata for a chat the bot can access.

- **Service**: `telegram`
- **Action**: `get_chat`
- **Action id**: `telegram.get_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_chat"
```

## Run

```bash
oo connector run "telegram" --action "get_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
