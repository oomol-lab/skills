# CompanyEnrich · `find_similar_companies`

Find companies similar to one or more seed company domains.

- **Service**: `companyenrich`
- **Action**: `find_similar_companies`
- **Action id**: `companyenrich.find_similar_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "find_similar_companies"
```

## Run

```bash
oo connector run "companyenrich" --action "find_similar_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
