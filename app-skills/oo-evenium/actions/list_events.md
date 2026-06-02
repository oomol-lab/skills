# Evenium · `list_events`

List Evenium events with optional title, status, date filters, and pagination.

- **Service**: `evenium`
- **Action**: `list_events`
- **Action id**: `evenium.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "list_events"
```

## Run

```bash
oo connector run "evenium" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
