# Tencent Maps · `route_driving`

Plan a Tencent Maps driving route.

- **Service**: `tencent_maps`
- **Action**: `route_driving`
- **Action id**: `tencent_maps.route_driving`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "route_driving"
```

## Run

```bash
oo connector run "tencent_maps" --action "route_driving" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
