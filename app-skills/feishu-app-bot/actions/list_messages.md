# Feishu App Bot · `list_messages`

List Feishu/Lark history messages from a chat or thread.

- **Service**: `feishu_app_bot`
- **Action**: `list_messages`
- **Action id**: `feishu_app_bot.list_messages`
- **Required scopes**: im:message:readonly, im:message.group_msg

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "list_messages"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
