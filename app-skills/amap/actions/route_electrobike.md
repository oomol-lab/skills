# AMap · `route_electrobike`

Plan an electric bike route.

- **Service**: `amap`
- **Action**: `route_electrobike`
- **Action id**: `amap.route_electrobike`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "route_electrobike"
```

## Run

```bash
oo connector run "amap" --action "route_electrobike" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
