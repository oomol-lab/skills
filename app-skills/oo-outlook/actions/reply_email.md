# Outlook · `reply_email`

Reply to an existing Outlook message with either a comment or a replacement body, and optionally add more recipients to the reply.

- **Service**: `outlook`
- **Action**: `reply_email`
- **Action id**: `outlook.reply_email`
- **Required scopes**: outlook.send

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "reply_email"
```

## Run

```bash
oo connector run "outlook" --action "reply_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
