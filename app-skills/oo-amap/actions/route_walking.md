# AMap · `route_walking`

Plan a walking route.

- **Service**: `amap`
- **Action**: `route_walking`
- **Action id**: `amap.route_walking`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "route_walking"
```

## Run

```bash
oo connector run "amap" --action "route_walking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
