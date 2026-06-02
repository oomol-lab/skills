# Ticketmaster · `get_venues`

Search Discovery API venues by ID, keyword, and location filters.

- **Service**: `ticketmaster`
- **Action**: `get_venues`
- **Action id**: `ticketmaster.get_venues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_venues"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_venues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
