# Feishu App Bot · `search_chats`

Search chats visible to the Feishu/Lark app bot by keyword.

- **Service**: `feishu_app_bot`
- **Action**: `search_chats`
- **Action id**: `feishu_app_bot.search_chats`
- **Required scopes**: im:chat:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "search_chats"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "search_chats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
