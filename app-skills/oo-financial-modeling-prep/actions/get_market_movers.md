# Financial Modeling Prep · `get_market_movers`

Retrieve the current biggest gainers, losers, or most active stocks from Financial Modeling Prep.

- **Service**: `financial_modeling_prep`
- **Action**: `get_market_movers`
- **Action id**: `financial_modeling_prep.get_market_movers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_market_movers"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_market_movers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
