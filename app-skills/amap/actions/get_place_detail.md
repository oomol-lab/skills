# AMap · `get_place_detail`

Get place details by id.

- **Service**: `amap`
- **Action**: `get_place_detail`
- **Action id**: `amap.get_place_detail`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "get_place_detail"
```

## Run

```bash
oo connector run "amap" --action "get_place_detail" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
