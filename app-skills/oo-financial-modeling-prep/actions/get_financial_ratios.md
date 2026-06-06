# Financial Modeling Prep · `get_financial_ratios`

Retrieve financial ratios for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_financial_ratios`
- **Action id**: `financial_modeling_prep.get_financial_ratios`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_financial_ratios"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_financial_ratios" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
