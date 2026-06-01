# Ticketmaster · `get_suggestions`

Get Discovery API search suggestions across events, venues, and attractions.

- **Service**: `ticketmaster`
- **Action**: `get_suggestions`
- **Action id**: `ticketmaster.get_suggestions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_suggestions"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_suggestions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
