# Ticketmaster · `get_events`

Search Discovery API events with Ticketmaster filters for keyword, location, date, and taxonomy fields.

- **Service**: `ticketmaster`
- **Action**: `get_events`
- **Action id**: `ticketmaster.get_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_events"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
