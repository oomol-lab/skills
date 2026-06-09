# Alpha Vantage · `get_balance_sheet`

Retrieve raw annual and quarterly balance sheet data for a company.

- **Service**: `alpha_vantage`
- **Action**: `get_balance_sheet`
- **Action id**: `alpha_vantage.get_balance_sheet`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_balance_sheet"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_balance_sheet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
