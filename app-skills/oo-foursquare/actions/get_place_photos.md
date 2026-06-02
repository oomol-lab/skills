# Foursquare · `get_place_photos`

Retrieve photos for one Foursquare place.

- **Service**: `foursquare`
- **Action**: `get_place_photos`
- **Action id**: `foursquare.get_place_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "foursquare" --action "get_place_photos"
```

## Run

```bash
oo connector run "foursquare" --action "get_place_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
