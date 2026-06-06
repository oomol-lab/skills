# Financial Modeling Prep · `get_income_statement`

Retrieve income statement rows for one stock symbol from Financial Modeling Prep.

- **Service**: `financial_modeling_prep`
- **Action**: `get_income_statement`
- **Action id**: `financial_modeling_prep.get_income_statement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_income_statement"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_income_statement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
