# WhatsApp · `send_interactive_list`

Send an interactive list message with sections and rows.

- **Service**: `whatsapp`
- **Action**: `send_interactive_list`
- **Action id**: `whatsapp.send_interactive_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_interactive_list"
```

## Run

```bash
oo connector run "whatsapp" --action "send_interactive_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
