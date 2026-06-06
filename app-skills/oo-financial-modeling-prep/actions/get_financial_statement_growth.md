# Financial Modeling Prep · `get_financial_statement_growth`

Retrieve financial statement growth rows for income, balance sheet, cash flow, or combined financial statements.

- **Service**: `financial_modeling_prep`
- **Action**: `get_financial_statement_growth`
- **Action id**: `financial_modeling_prep.get_financial_statement_growth`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_financial_statement_growth"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_financial_statement_growth" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
