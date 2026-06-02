# Tencent Maps · `search_places`

Search Tencent Maps places within a region boundary.

- **Service**: `tencent_maps`
- **Action**: `search_places`
- **Action id**: `tencent_maps.search_places`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "search_places"
```

## Run

```bash
oo connector run "tencent_maps" --action "search_places" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
