# Ticketmaster · `get_classifications`

List Discovery API classifications for segments, genres, and sub-genres.

- **Service**: `ticketmaster`
- **Action**: `get_classifications`
- **Action id**: `ticketmaster.get_classifications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "get_classifications"
```

## Run

```bash
oo connector run "ticketmaster" --action "get_classifications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
