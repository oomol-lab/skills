# Financial Modeling Prep · `get_company_notes`

Retrieve company note rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_company_notes`
- **Action id**: `financial_modeling_prep.get_company_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_company_notes"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_company_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
