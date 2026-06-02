# AMap · `route_driving`

Plan a driving route.

- **Service**: `amap`
- **Action**: `route_driving`
- **Action id**: `amap.route_driving`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "route_driving"
```

## Run

```bash
oo connector run "amap" --action "route_driving" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
