# Autobound · `search_companies`

Search companies that match Autobound company-level signal filters.

- **Service**: `autobound`
- **Action**: `search_companies`
- **Action id**: `autobound.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "search_companies"
```

## Run

```bash
oo connector run "autobound" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
