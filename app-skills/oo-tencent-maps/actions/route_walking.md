# Tencent Maps · `route_walking`

Plan a Tencent Maps walking route.

- **Service**: `tencent_maps`
- **Action**: `route_walking`
- **Action id**: `tencent_maps.route_walking`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "route_walking"
```

## Run

```bash
oo connector run "tencent_maps" --action "route_walking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
