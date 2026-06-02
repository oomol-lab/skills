# WhatsApp · `get_media_info`

Get metadata and a short-lived download URL for uploaded media.

- **Service**: `whatsapp`
- **Action**: `get_media_info`
- **Action id**: `whatsapp.get_media_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_media_info"
```

## Run

```bash
oo connector run "whatsapp" --action "get_media_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
