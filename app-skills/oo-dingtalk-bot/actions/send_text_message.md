# DingTalk Bot · `send_text_message`

Send a text message through the DingTalk custom bot webhook.

- **Service**: `dingtalk_bot`
- **Action**: `send_text_message`
- **Action id**: `dingtalk_bot.send_text_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dingtalk_bot" --action "send_text_message"
```

## Run

```bash
oo connector run "dingtalk_bot" --action "send_text_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DingTalk Bot state. Confirm the exact payload and intended effect with the user before running.
