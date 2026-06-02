# WhatsApp · `send_interactive_buttons`

Send an interactive reply-button message.

- **Service**: `whatsapp`
- **Action**: `send_interactive_buttons`
- **Action id**: `whatsapp.send_interactive_buttons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whatsapp" --action "send_interactive_buttons"
```

## Run

```bash
oo connector run "whatsapp" --action "send_interactive_buttons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WhatsApp state. Confirm the exact payload and intended effect with the user before running.
