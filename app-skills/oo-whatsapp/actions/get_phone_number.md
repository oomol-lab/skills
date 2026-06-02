# WhatsApp · `get_phone_number`

Get metadata for a specific WhatsApp Business phone number.

- **Service**: `whatsapp`
- **Action**: `get_phone_number`
- **Action id**: `whatsapp.get_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_phone_number"
```

## Run

```bash
oo connector run "whatsapp" --action "get_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
