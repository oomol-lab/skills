# Alpha Vantage · `get_income_statement`

Retrieve raw annual and quarterly income statement data for a company.

- **Service**: `alpha_vantage`
- **Action**: `get_income_statement`
- **Action id**: `alpha_vantage.get_income_statement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_income_statement"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_income_statement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
