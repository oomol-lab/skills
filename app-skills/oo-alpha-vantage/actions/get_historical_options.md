# Alpha Vantage · `get_historical_options`

Retrieve raw historical options data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_historical_options`
- **Action id**: `alpha_vantage.get_historical_options`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_historical_options"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_historical_options" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
