# TomTom · `fuzzy_search`

Search addresses or places with the TomTom Search API fuzzy search endpoint.

- **Service**: `tomtom`
- **Action**: `fuzzy_search`
- **Action id**: `tomtom.fuzzy_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomtom" --action "fuzzy_search"
```

## Run

```bash
oo connector run "tomtom" --action "fuzzy_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
