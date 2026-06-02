# Yelp · `search_businesses`

Search Yelp businesses by keyword and geographic anchor.

- **Service**: `yelp`
- **Action**: `search_businesses`
- **Action id**: `yelp.search_businesses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "yelp" --action "search_businesses"
```

## Run

```bash
oo connector run "yelp" --action "search_businesses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
