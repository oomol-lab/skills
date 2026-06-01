# waboxapp · `send_chat`

Send a plain text WhatsApp chat message through Waboxapp.

- **Service**: `waboxapp`
- **Action**: `send_chat`
- **Action id**: `waboxapp.send_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "waboxapp" --action "send_chat"
```

## Run

```bash
oo connector run "waboxapp" --action "send_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes waboxapp state. Confirm the exact payload and intended effect with the user before running.
