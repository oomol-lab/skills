# AMap · `search_places_polygon`

Search places inside a polygon.

- **Service**: `amap`
- **Action**: `search_places_polygon`
- **Action id**: `amap.search_places_polygon`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "search_places_polygon"
```

## Run

```bash
oo connector run "amap" --action "search_places_polygon" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
