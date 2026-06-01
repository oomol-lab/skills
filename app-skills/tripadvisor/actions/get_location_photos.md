# Tripadvisor · `get_location_photos`

Get Tripadvisor photos for one location with optional paging and source filters.

- **Service**: `tripadvisor`
- **Action**: `get_location_photos`
- **Action id**: `tripadvisor.get_location_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tripadvisor" --action "get_location_photos"
```

## Run

```bash
oo connector run "tripadvisor" --action "get_location_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
