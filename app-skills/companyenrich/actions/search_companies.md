# CompanyEnrich · `search_companies`

Search CompanyEnrich companies with page-based filters and pagination.

- **Service**: `companyenrich`
- **Action**: `search_companies`
- **Action id**: `companyenrich.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "search_companies"
```

## Run

```bash
oo connector run "companyenrich" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
