# Feishu App Bot · `get_chat`

Fetch one Feishu/Lark chat by `chat_id`.

- **Service**: `feishu_app_bot`
- **Action**: `get_chat`
- **Action id**: `feishu_app_bot.get_chat`
- **Required scopes**: im:chat:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "get_chat"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "get_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
