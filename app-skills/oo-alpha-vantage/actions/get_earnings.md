# Alpha Vantage · `get_earnings`

Retrieve raw annual and quarterly earnings data for a company.

- **Service**: `alpha_vantage`
- **Action**: `get_earnings`
- **Action id**: `alpha_vantage.get_earnings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_earnings"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_earnings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
