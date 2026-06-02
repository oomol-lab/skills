# APIVerve · `get_airport_distance`

Get distance and flight estimates between two airports using IATA codes.

- **Service**: `apiverve`
- **Action**: `get_airport_distance`
- **Action id**: `apiverve.get_airport_distance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "get_airport_distance"
```

## Run

```bash
oo connector run "apiverve" --action "get_airport_distance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
