# Financial Modeling Prep · `get_etf_holdings`

Retrieve ETF holding rows for one ETF symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_etf_holdings`
- **Action id**: `financial_modeling_prep.get_etf_holdings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_etf_holdings"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_etf_holdings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
