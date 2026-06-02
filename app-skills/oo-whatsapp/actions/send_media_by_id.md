# WhatsApp · `send_media_by_id`

Send previously uploaded media by Meta media ID.

- **Service**: `whatsapp`
- **Action**: `send_media_by_id`
- **Action id**: `whatsapp.send_media_by_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_media_by_id"
```

## Run

```bash
oo connector run "whatsapp" --action "send_media_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
