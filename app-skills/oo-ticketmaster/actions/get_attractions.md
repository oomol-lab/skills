# Ticketmaster · `get_attractions`

Search Discovery API attractions for artists, teams, performers, and other attraction entities.

- **Service**: `ticketmaster`
- **Action**: `get_attractions`
- **Action id**: `ticketmaster.get_attractions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_attractions"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_attractions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
