# Financial Modeling Prep · `get_dcf`

Retrieve discounted cash flow valuation rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_dcf`
- **Action id**: `financial_modeling_prep.get_dcf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_dcf"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_dcf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
