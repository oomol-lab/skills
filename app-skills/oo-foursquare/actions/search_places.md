# Foursquare · `search_places`

Search for places with the Foursquare Places Search endpoint.

- **Service**: `foursquare`
- **Action**: `search_places`
- **Action id**: `foursquare.search_places`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "foursquare" --action "search_places"
```

## Run

```bash
oo connector run "foursquare" --action "search_places" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
