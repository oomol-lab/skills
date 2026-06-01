# Alpha Vantage · `get_market_status`

Retrieve the current open or closed status for major equity, forex, and cryptocurrency markets.

- **Service**: `alpha_vantage`
- **Action**: `get_market_status`
- **Action id**: `alpha_vantage.get_market_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_market_status"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_market_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
