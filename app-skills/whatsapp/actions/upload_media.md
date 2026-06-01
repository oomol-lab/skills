# WhatsApp · `upload_media`

Upload media to Meta and return the resulting media record.

- **Service**: `whatsapp`
- **Action**: `upload_media`
- **Action id**: `whatsapp.upload_media`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "upload_media"
```

## Run

```bash
oo connector run "whatsapp" --action "upload_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
