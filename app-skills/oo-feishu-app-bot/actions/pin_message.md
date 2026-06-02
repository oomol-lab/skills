# Feishu App Bot · `pin_message`

Pin one Feishu/Lark message inside its chat.

- **Service**: `feishu_app_bot`
- **Action**: `pin_message`
- **Action id**: `feishu_app_bot.pin_message`
- **Required scopes**: im:message.pins:write_only

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "pin_message"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "pin_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
