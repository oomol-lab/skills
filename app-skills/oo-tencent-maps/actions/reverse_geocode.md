# Tencent Maps · `reverse_geocode`

Convert Tencent Maps coordinates into an address and nearby place context.

- **Service**: `tencent_maps`
- **Action**: `reverse_geocode`
- **Action id**: `tencent_maps.reverse_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "reverse_geocode"
```

## Run

```bash
oo connector run "tencent_maps" --action "reverse_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
