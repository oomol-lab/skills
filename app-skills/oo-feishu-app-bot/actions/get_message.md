# Feishu App Bot · `get_message`

Fetch one Feishu/Lark message by `message_id`.

- **Service**: `feishu_app_bot`
- **Action**: `get_message`
- **Action id**: `feishu_app_bot.get_message`
- **Required scopes**: im:message:readonly, im:message.group_msg

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "get_message"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
