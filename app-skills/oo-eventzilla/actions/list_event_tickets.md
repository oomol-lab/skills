# Eventzilla · `list_event_tickets`

List Eventzilla ticket categories and donation entries for one event.

- **Service**: `eventzilla`
- **Action**: `list_event_tickets`
- **Action id**: `eventzilla.list_event_tickets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "list_event_tickets"
```

## Run

```bash
oo connector run "eventzilla" --action "list_event_tickets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
