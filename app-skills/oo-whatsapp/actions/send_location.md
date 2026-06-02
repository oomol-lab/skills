# WhatsApp · `send_location`

Send a location message to a WhatsApp user.

- **Service**: `whatsapp`
- **Action**: `send_location`
- **Action id**: `whatsapp.send_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_location"
```

## Run

```bash
oo connector run "whatsapp" --action "send_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
