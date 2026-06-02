# AMap · `route_bicycling`

Plan a bicycling route.

- **Service**: `amap`
- **Action**: `route_bicycling`
- **Action id**: `amap.route_bicycling`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "route_bicycling"
```

## Run

```bash
oo connector run "amap" --action "route_bicycling" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
