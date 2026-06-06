# Alpha Vantage · `get_dividends`

Retrieve raw historical and future dividend data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_dividends`
- **Action id**: `alpha_vantage.get_dividends`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_dividends"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_dividends" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
