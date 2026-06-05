# Tomba · `search_companies`

Search companies with Tomba Reveal using a natural-language query or filters.

- **Service**: `tomba`
- **Action**: `search_companies`
- **Action id**: `tomba.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "search_companies"
```

## Run

```bash
oo connector run "tomba" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
