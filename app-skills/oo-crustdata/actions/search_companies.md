# Crustdata · `search_companies`

Search companies with Crustdata filters, optional field selection, sorting, and cursor pagination.

- **Service**: `crustdata`
- **Action**: `search_companies`
- **Action id**: `crustdata.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crustdata" --action "search_companies"
```

## Run

```bash
oo connector run "crustdata" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
