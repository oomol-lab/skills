# AMap · `reverse_geocode`

Convert coordinates to an address.

- **Service**: `amap`
- **Action**: `reverse_geocode`
- **Action id**: `amap.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "reverse_geocode"
```

## Run

```bash
oo connector run "amap" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
