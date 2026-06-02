# APIVerve · `lookup_airport`

Look up airport information by IATA code using APIVerve Airports Lookup.

- **Service**: `apiverve`
- **Action**: `lookup_airport`
- **Action id**: `apiverve.lookup_airport`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "lookup_airport"
```

## Run

```bash
oo connector run "apiverve" --action "lookup_airport" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
