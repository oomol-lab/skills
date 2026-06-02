# Telegram Bot · `get_chat_member`

Return information about one chat member.

- **Service**: `telegram`
- **Action**: `get_chat_member`
- **Action id**: `telegram.get_chat_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "get_chat_member"
```

## Run

```bash
oo connector run "telegram" --action "get_chat_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
