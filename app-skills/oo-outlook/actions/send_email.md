# Outlook · `send_email`

Send a new Outlook email in a single operation, without creating a standalone draft first.

- **Service**: `outlook`
- **Action**: `send_email`
- **Action id**: `outlook.send_email`
- **Required scopes**: outlook.send

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "send_email"
```

## Run

```bash
oo connector run "outlook" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
