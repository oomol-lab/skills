# WhatsApp · `send_contacts`

Send one or more contacts to a WhatsApp user.

- **Service**: `whatsapp`
- **Action**: `send_contacts`
- **Action id**: `whatsapp.send_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_contacts"
```

## Run

```bash
oo connector run "whatsapp" --action "send_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
