# WhatsApp · `send_template_message`

Send an approved WhatsApp template message.

- **Service**: `whatsapp`
- **Action**: `send_template_message`
- **Action id**: `whatsapp.send_template_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_template_message"
```

## Run

```bash
oo connector run "whatsapp" --action "send_template_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
