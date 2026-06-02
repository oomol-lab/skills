# Telegram Bot · `get_chat_members_count`

Return the number of members in a chat.

- **Service**: `telegram`
- **Action**: `get_chat_members_count`
- **Action id**: `telegram.get_chat_members_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_chat_members_count"
```

## Run

```bash
oo connector run "telegram" --action "get_chat_members_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
