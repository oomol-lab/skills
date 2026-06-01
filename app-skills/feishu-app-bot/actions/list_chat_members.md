# Feishu App Bot · `list_chat_members`

List visible members in one Feishu/Lark chat.

- **Service**: `feishu_app_bot`
- **Action**: `list_chat_members`
- **Action id**: `feishu_app_bot.list_chat_members`
- **Required scopes**: im:chat.members:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "list_chat_members"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "list_chat_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
