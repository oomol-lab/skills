# WhatsApp · `get_message_templates`

List message templates for a WhatsApp Business Account.

- **Service**: `whatsapp`
- **Action**: `get_message_templates`
- **Action id**: `whatsapp.get_message_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_message_templates"
```

## Run

```bash
oo connector run "whatsapp" --action "get_message_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
