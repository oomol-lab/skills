# Tencent Maps · `get_place_detail`

Fetch Tencent Maps place details by place id.

- **Service**: `tencent_maps`
- **Action**: `get_place_detail`
- **Action id**: `tencent_maps.get_place_detail`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "get_place_detail"
```

## Run

```bash
oo connector run "tencent_maps" --action "get_place_detail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
