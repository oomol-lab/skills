# Feishu App Bot · `add_message_reaction`

Add one emoji reaction to a Feishu/Lark message.

- **Service**: `feishu_app_bot`
- **Action**: `add_message_reaction`
- **Action id**: `feishu_app_bot.add_message_reaction`
- **Required scopes**: im:message.reactions:write_only

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_app_bot" --action "add_message_reaction"
```

## Run

```bash
oo connector run "feishu_app_bot" --action "add_message_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Feishu App Bot state. Confirm the exact payload and intended effect with the user before running.
