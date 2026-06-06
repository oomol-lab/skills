# Alpha Vantage · `get_institutional_holdings`

Retrieve raw institutional holding data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_institutional_holdings`
- **Action id**: `alpha_vantage.get_institutional_holdings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_institutional_holdings"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_institutional_holdings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
