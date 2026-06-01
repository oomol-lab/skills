# Freshdesk · `list_ticket_conversations`

List conversations attached to a Freshdesk ticket.

- **Service**: `freshdesk`
- **Action**: `list_ticket_conversations`
- **Action id**: `freshdesk.list_ticket_conversations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshdesk" --action "list_ticket_conversations"
```

## Run

```bash
oo connector run "freshdesk" --action "list_ticket_conversations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
