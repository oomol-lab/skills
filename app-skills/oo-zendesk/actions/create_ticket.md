# Zendesk · `create_ticket`

Create a Zendesk ticket with an initial comment.

- **Service**: `zendesk`
- **Action**: `create_ticket`
- **Action id**: `zendesk.create_ticket`
- **Required scopes**: zendesk.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "create_ticket"
```

## Run

```bash
oo connector run "zendesk" --action "create_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Zendesk state. Confirm the exact payload and intended effect with the user before running.
