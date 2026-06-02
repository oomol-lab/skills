# Feishu Custom Bot · `send_interactive_message`

Send an interactive card message through the Feishu/Lark custom bot webhook.

- **Service**: `feishu_custom_bot`
- **Action**: `send_interactive_message`
- **Action id**: `feishu_custom_bot.send_interactive_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "feishu_custom_bot" --action "send_interactive_message"
```

## Run

```bash
oo connector run "feishu_custom_bot" --action "send_interactive_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Feishu Custom Bot state. Confirm the exact payload and intended effect with the user before running.
