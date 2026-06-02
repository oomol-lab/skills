# Tencent Maps · `route_bicycling`

Plan a Tencent Maps bicycling route.

- **Service**: `tencent_maps`
- **Action**: `route_bicycling`
- **Action id**: `tencent_maps.route_bicycling`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "route_bicycling"
```

## Run

```bash
oo connector run "tencent_maps" --action "route_bicycling" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
