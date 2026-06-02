# Tencent Maps · `district_search`

List, search, or fetch child Tencent Maps administrative districts.

- **Service**: `tencent_maps`
- **Action**: `district_search`
- **Action id**: `tencent_maps.district_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "district_search"
```

## Run

```bash
oo connector run "tencent_maps" --action "district_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
