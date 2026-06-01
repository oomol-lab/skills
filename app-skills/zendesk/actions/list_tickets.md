# Zendesk · `list_tickets`

List Zendesk tickets with offset or cursor pagination.

- **Service**: `zendesk`
- **Action**: `list_tickets`
- **Action id**: `zendesk.list_tickets`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "list_tickets"
```

## Run

```bash
oo connector run "zendesk" --action "list_tickets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
