# Outlook · `send_draft`

Send an existing Outlook draft message by message ID.

- **Service**: `outlook`
- **Action**: `send_draft`
- **Action id**: `outlook.send_draft`
- **Required scopes**: outlook.send

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "send_draft"
```

## Run

```bash
oo connector run "outlook" --action "send_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
