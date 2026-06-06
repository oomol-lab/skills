# Financial Modeling Prep · `search_company_screener`

Search companies with Financial Modeling Prep screener filters.

- **Service**: `financial_modeling_prep`
- **Action**: `search_company_screener`
- **Action id**: `financial_modeling_prep.search_company_screener`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "search_company_screener"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "search_company_screener" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
