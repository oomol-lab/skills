# Foursquare · `get_nearby_places`

Retrieve nearby places around a latitude and longitude with Foursquare.

- **Service**: `foursquare`
- **Action**: `get_nearby_places`
- **Action id**: `foursquare.get_nearby_places`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "foursquare" --action "get_nearby_places"
```

## Run

```bash
oo connector run "foursquare" --action "get_nearby_places" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
