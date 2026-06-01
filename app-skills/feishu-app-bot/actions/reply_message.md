# Feishu App Bot · `reply_message`

Reply to an existing Feishu/Lark message as the app bot.

- **Service**: `feishu_app_bot`
- **Action**: `reply_message`
- **Action id**: `feishu_app_bot.reply_message`
- **Required scopes**: im:message:send_as_bot

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "reply_message"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "reply_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Feishu App Bot state. Confirm the exact payload and intended effect with the user before running.
