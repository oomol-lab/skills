# AMap · `search_places_around`

Search places around a location.

- **Service**: `amap`
- **Action**: `search_places_around`
- **Action id**: `amap.search_places_around`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "search_places_around"
```

## Run

```bash
oo connector run "amap" --action "search_places_around" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
