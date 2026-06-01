# WhatsApp · `get_phone_numbers`

List phone numbers for a WhatsApp Business Account.

- **Service**: `whatsapp`
- **Action**: `get_phone_numbers`
- **Action id**: `whatsapp.get_phone_numbers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_phone_numbers"
```

## Run

```bash
oo connector run "whatsapp" --action "get_phone_numbers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
