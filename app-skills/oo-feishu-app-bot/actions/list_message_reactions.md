# Feishu App Bot · `list_message_reactions`

List emoji reactions on one Feishu/Lark message.

- **Service**: `feishu_app_bot`
- **Action**: `list_message_reactions`
- **Action id**: `feishu_app_bot.list_message_reactions`
- **Required scopes**: im:message.reactions:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "list_message_reactions"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "list_message_reactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
