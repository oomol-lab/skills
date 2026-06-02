# Tripadvisor · `search_nearby_locations`

Search Tripadvisor locations near a latitude and longitude coordinate pair.

- **Service**: `tripadvisor`
- **Action**: `search_nearby_locations`
- **Action id**: `tripadvisor.search_nearby_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tripadvisor" --action "search_nearby_locations"
```

## Run

```bash
oo connector run "tripadvisor" --action "search_nearby_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
