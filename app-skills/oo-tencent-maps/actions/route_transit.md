# Tencent Maps · `route_transit`

Plan a Tencent Maps transit route.

- **Service**: `tencent_maps`
- **Action**: `route_transit`
- **Action id**: `tencent_maps.route_transit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "route_transit"
```

## Run

```bash
oo connector run "tencent_maps" --action "route_transit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
