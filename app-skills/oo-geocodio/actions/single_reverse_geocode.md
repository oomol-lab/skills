# Geocodio · `single_reverse_geocode`

Reverse geocode a single latitude and longitude pair and return the official Geocodio response payload.

- **Service**: `geocodio`
- **Action**: `single_reverse_geocode`
- **Action id**: `geocodio.single_reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geocodio" --action "single_reverse_geocode"
```

## Run

```bash
oo connector run "geocodio" --action "single_reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
