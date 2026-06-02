# Feishu App Bot · `edit_message`

Edit a Feishu/Lark text or post message sent by the app bot.

- **Service**: `feishu_app_bot`
- **Action**: `edit_message`
- **Action id**: `feishu_app_bot.edit_message`
- **Required scopes**: im:message:update

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "edit_message"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "edit_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Feishu App Bot state. Confirm the exact payload and intended effect with the user before running.
