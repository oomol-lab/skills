# Freshdesk · `list_tickets`

List Freshdesk tickets with optional filters and include expansions.

- **Service**: `freshdesk`
- **Action**: `list_tickets`
- **Action id**: `freshdesk.list_tickets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshdesk" --action "list_tickets"
```

## Run

```bash
oo connector run "freshdesk" --action "list_tickets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
