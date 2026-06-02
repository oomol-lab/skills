# AMap · `route_transit`

Plan a transit route.

- **Service**: `amap`
- **Action**: `route_transit`
- **Action id**: `amap.route_transit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "route_transit"
```

## Run

```bash
oo connector run "amap" --action "route_transit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
