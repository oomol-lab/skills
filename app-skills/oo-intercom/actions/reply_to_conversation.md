# Intercom · `reply_to_conversation`

Reply to an Intercom conversation as an admin.

- **Service**: `intercom`
- **Action**: `reply_to_conversation`
- **Action id**: `intercom.reply_to_conversation`
- **Required scopes**: intercom.conversations.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "reply_to_conversation"
```

## Run

```bash
oo connector run "intercom" --action "reply_to_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Intercom state. Confirm the exact payload and intended effect with the user before running.
