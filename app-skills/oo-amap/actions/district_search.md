# AMap · `district_search`

Search administrative districts.

- **Service**: `amap`
- **Action**: `district_search`
- **Action id**: `amap.district_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "district_search"
```

## Run

```bash
oo connector run "amap" --action "district_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
