# Feishu App Bot · `list_chats`

List chats that the Feishu/Lark app bot currently belongs to.

- **Service**: `feishu_app_bot`
- **Action**: `list_chats`
- **Action id**: `feishu_app_bot.list_chats`
- **Required scopes**: im:chat:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "list_chats"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "list_chats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
