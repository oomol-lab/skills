# Eventzilla · `list_events`

List Eventzilla events visible to the authenticated organizer account with optional status or category filtering.

- **Service**: `eventzilla`
- **Action**: `list_events`
- **Action id**: `eventzilla.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "list_events"
```

## Run

```bash
oo connector run "eventzilla" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
