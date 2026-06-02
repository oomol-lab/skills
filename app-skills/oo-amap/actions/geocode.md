# AMap · `geocode`

Convert an address to coordinates.

- **Service**: `amap`
- **Action**: `geocode`
- **Action id**: `amap.geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "geocode"
```

## Run

```bash
oo connector run "amap" --action "geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
