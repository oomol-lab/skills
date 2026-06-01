# WhatsApp · `get_template_status`

Get status details for a specific message template.

- **Service**: `whatsapp`
- **Action**: `get_template_status`
- **Action id**: `whatsapp.get_template_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "get_template_status"
```

## Run

```bash
oo connector run "whatsapp" --action "get_template_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
