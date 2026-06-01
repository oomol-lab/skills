# WhatsApp · `delete_message_template`

Delete all message template variants that share the same name.

- **Service**: `whatsapp`
- **Action**: `delete_message_template`
- **Action id**: `whatsapp.delete_message_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "delete_message_template"
```

## Run

```bash
oo connector run "whatsapp" --action "delete_message_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites WhatsApp data. Always confirm the target and get explicit user approval before running.
