# WhatsApp · `get_business_profile`

Get the business profile configured for a WhatsApp Business phone number.

- **Service**: `whatsapp`
- **Action**: `get_business_profile`
- **Action id**: `whatsapp.get_business_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_business_profile"
```

## Run

```bash
oo connector run "whatsapp" --action "get_business_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
