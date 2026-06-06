# Financial Modeling Prep · `get_company_profile_by_cik`

Retrieve company profile rows by CIK from Financial Modeling Prep.

- **Service**: `financial_modeling_prep`
- **Action**: `get_company_profile_by_cik`
- **Action id**: `financial_modeling_prep.get_company_profile_by_cik`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_company_profile_by_cik"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_company_profile_by_cik" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
