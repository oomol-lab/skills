# Alpha Vantage · `get_cash_flow`

Retrieve raw annual and quarterly cash flow data for a company.

- **Service**: `alpha_vantage`
- **Action**: `get_cash_flow`
- **Action id**: `alpha_vantage.get_cash_flow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_cash_flow"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_cash_flow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
