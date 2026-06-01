# CompanyEnrich · `enrich_company_by_domain`

Enrich a company profile from its primary domain.

- **Service**: `companyenrich`
- **Action**: `enrich_company_by_domain`
- **Action id**: `companyenrich.enrich_company_by_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "enrich_company_by_domain"
```

## Run

```bash
oo connector run "companyenrich" --action "enrich_company_by_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
