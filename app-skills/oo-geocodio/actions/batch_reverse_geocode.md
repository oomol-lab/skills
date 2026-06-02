# Geocodio · `batch_reverse_geocode`

Reverse geocode multiple coordinate pairs in one batch request and return Geocodio batch results.

- **Service**: `geocodio`
- **Action**: `batch_reverse_geocode`
- **Action id**: `geocodio.batch_reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geocodio" --action "batch_reverse_geocode"
```

## Run

```bash
oo connector run "geocodio" --action "batch_reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
