# Freshservice · `list_tickets`

List Freshservice tickets with optional filters, pagination, and include expansions.

- **Service**: `freshservice`
- **Action**: `list_tickets`
- **Action id**: `freshservice.list_tickets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "list_tickets"
```

## Run

```bash
oo connector run "freshservice" --action "list_tickets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
