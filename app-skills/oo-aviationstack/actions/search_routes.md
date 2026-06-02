# Aviationstack · `search_routes`

Search Aviationstack airline routes with airport, airline, flight, and pagination filters.

- **Service**: `aviationstack`
- **Action**: `search_routes`
- **Action id**: `aviationstack.search_routes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "search_routes"
```

## Run

```bash
oo connector run "aviationstack" --action "search_routes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
