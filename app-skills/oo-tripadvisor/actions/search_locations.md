# Tripadvisor · `search_locations`

Search Tripadvisor locations by text with optional geographic and category filters.

- **Service**: `tripadvisor`
- **Action**: `search_locations`
- **Action id**: `tripadvisor.search_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tripadvisor" --action "search_locations"
```

## Run

```bash
oo connector run "tripadvisor" --action "search_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
