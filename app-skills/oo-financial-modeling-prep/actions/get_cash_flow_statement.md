# Financial Modeling Prep · `get_cash_flow_statement`

Retrieve cash flow statement rows for one stock symbol from Financial Modeling Prep.

- **Service**: `financial_modeling_prep`
- **Action**: `get_cash_flow_statement`
- **Action id**: `financial_modeling_prep.get_cash_flow_statement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_cash_flow_statement"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_cash_flow_statement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
