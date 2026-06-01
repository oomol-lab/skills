# Tencent Maps · `search_places_around`

Search Tencent Maps places around a nearby center point.

- **Service**: `tencent_maps`
- **Action**: `search_places_around`
- **Action id**: `tencent_maps.search_places_around`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "search_places_around"
```

## Run

```bash
oo connector run "tencent_maps" --action "search_places_around" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
