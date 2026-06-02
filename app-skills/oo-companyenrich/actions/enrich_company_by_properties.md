# CompanyEnrich · `enrich_company_by_properties`

Enrich a company profile from identifying company properties.

- **Service**: `companyenrich`
- **Action**: `enrich_company_by_properties`
- **Action id**: `companyenrich.enrich_company_by_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "companyenrich" --action "enrich_company_by_properties"
```

## Run

```bash
oo connector run "companyenrich" --action "enrich_company_by_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
