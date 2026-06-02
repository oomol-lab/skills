# Telegram Bot · `create_chat_invite_link`

Export a new primary invite link for a chat. This maps to Telegram Bot API exportChatInviteLink.

- **Service**: `telegram`
- **Action**: `create_chat_invite_link`
- **Action id**: `telegram.create_chat_invite_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "telegram" --action "create_chat_invite_link"
```

## Run

```bash
oo connector run "telegram" --action "create_chat_invite_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Telegram Bot state. Confirm the exact payload and intended effect with the user before running.
