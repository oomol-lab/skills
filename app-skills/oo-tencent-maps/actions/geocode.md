# Tencent Maps · `geocode`

Convert an address into Tencent Maps coordinates and structured address parts.

- **Service**: `tencent_maps`
- **Action**: `geocode`
- **Action id**: `tencent_maps.geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "geocode"
```

## Run

```bash
oo connector run "tencent_maps" --action "geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
