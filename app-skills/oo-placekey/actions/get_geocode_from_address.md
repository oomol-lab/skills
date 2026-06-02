# Placekey · `get_geocode_from_address`

Resolve a postal address with Placekey and return the matched geocode response for the location.

- **Service**: `placekey`
- **Action**: `get_geocode_from_address`
- **Action id**: `placekey.get_geocode_from_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placekey" --action "get_geocode_from_address"
```

## Run

```bash
oo connector run "placekey" --action "get_geocode_from_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
