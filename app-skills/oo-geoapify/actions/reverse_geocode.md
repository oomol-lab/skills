# Geoapify · `reverse_geocode`

Convert latitude and longitude into place results with Geoapify.

- **Service**: `geoapify`
- **Action**: `reverse_geocode`
- **Action id**: `geoapify.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geoapify" --action "reverse_geocode"
```

## Run

```bash
oo connector run "geoapify" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
