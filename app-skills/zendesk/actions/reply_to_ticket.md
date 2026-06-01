# Zendesk · `reply_to_ticket`

Append a public reply or internal note to a Zendesk ticket.

- **Service**: `zendesk`
- **Action**: `reply_to_ticket`
- **Action id**: `zendesk.reply_to_ticket`
- **Required scopes**: zendesk.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "reply_to_ticket"
```

## Run

```bash
oo connector run "zendesk" --action "reply_to_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Zendesk state. Confirm the exact payload and intended effect with the user before running.
