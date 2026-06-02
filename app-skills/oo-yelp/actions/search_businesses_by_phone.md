# Yelp · `search_businesses_by_phone`

Find Yelp businesses by exact phone number.

- **Service**: `yelp`
- **Action**: `search_businesses_by_phone`
- **Action id**: `yelp.search_businesses_by_phone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "yelp" --action "search_businesses_by_phone"
```

## Run

```bash
oo connector run "yelp" --action "search_businesses_by_phone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
