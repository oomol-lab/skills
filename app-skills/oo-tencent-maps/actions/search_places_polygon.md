# Tencent Maps · `search_places_polygon`

Search Tencent Maps places inside a polygon boundary.

- **Service**: `tencent_maps`
- **Action**: `search_places_polygon`
- **Action id**: `tencent_maps.search_places_polygon`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "search_places_polygon"
```

## Run

```bash
oo connector run "tencent_maps" --action "search_places_polygon" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
