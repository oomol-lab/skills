# OpenCage · `geocode_reverse`

Convert a latitude and longitude pair into OpenCage reverse geocoding results.

- **Service**: `opencage`
- **Action**: `geocode_reverse`
- **Action id**: `opencage.geocode_reverse`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opencage" --action "geocode_reverse"
```

## Run

```bash
oo connector run "opencage" --action "geocode_reverse" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
