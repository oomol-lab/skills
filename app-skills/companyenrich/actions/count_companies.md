# CompanyEnrich · `count_companies`

Count how many companies match the provided CompanyEnrich search filters.

- **Service**: `companyenrich`
- **Action**: `count_companies`
- **Action id**: `companyenrich.count_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "count_companies"
```

## Run

```bash
oo connector run "companyenrich" --action "count_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
