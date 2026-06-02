# Geokeo · `geocode_reverse`

Convert coordinates into Geokeo reverse geocoding results.

- **Service**: `geokeo`
- **Action**: `geocode_reverse`
- **Action id**: `geokeo.geocode_reverse`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geokeo" --action "geocode_reverse"
```

## Run

```bash
oo connector run "geokeo" --action "geocode_reverse" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
