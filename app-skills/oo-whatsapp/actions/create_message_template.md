# WhatsApp · `create_message_template`

Create a new WhatsApp message template for a WABA.

- **Service**: `whatsapp`
- **Action**: `create_message_template`
- **Action id**: `whatsapp.create_message_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "create_message_template"
```

## Run

```bash
oo connector run "whatsapp" --action "create_message_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
