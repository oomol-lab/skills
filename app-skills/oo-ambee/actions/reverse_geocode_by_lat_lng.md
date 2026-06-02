# Ambee · `reverse_geocode_by_lat_lng`

Convert latitude and longitude into location details with Ambee.

- **Service**: `ambee`
- **Action**: `reverse_geocode_by_lat_lng`
- **Action id**: `ambee.reverse_geocode_by_lat_lng`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambee" --action "reverse_geocode_by_lat_lng"
```

## Run

```bash
oo connector run "ambee" --action "reverse_geocode_by_lat_lng" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
