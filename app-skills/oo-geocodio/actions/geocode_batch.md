# Geocodio · `geocode_batch`

Geocode multiple addresses in one batch request and return Geocodio batch results.

- **Service**: `geocodio`
- **Action**: `geocode_batch`
- **Action id**: `geocodio.geocode_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geocodio" --action "geocode_batch"
```

## Run

```bash
oo connector run "geocodio" --action "geocode_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
