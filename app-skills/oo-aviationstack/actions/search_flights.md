# Aviationstack · `search_flights`

Search real-time or recent historical Aviationstack flights with optional filters.

- **Service**: `aviationstack`
- **Action**: `search_flights`
- **Action id**: `aviationstack.search_flights`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "search_flights"
```

## Run

```bash
oo connector run "aviationstack" --action "search_flights" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
