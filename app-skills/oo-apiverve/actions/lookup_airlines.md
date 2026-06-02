# APIVerve · `lookup_airlines`

Look up airlines by name or IATA code using APIVerve Airline Lookup.

- **Service**: `apiverve`
- **Action**: `lookup_airlines`
- **Action id**: `apiverve.lookup_airlines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "lookup_airlines"
```

## Run

```bash
oo connector run "apiverve" --action "lookup_airlines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
