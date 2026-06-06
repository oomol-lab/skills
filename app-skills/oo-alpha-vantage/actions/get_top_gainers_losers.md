# Alpha Vantage · `get_top_gainers_losers`

Retrieve the raw Alpha Vantage top gainers, losers, and most active stocks.

- **Service**: `alpha_vantage`
- **Action**: `get_top_gainers_losers`
- **Action id**: `alpha_vantage.get_top_gainers_losers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_top_gainers_losers"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_top_gainers_losers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
