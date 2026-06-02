# World News API · `get_geo_coordinates`

Resolve a location string to latitude and longitude with World News API.

- **Service**: `world_news_api`
- **Action**: `get_geo_coordinates`
- **Action id**: `world_news_api.get_geo_coordinates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "world_news_api" --action "get_geo_coordinates"
```

## Run

```bash
oo connector run "world_news_api" --action "get_geo_coordinates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
