# Twelve Data · `market_movers`

Fetch the top gaining or losing instruments for a market family such as stocks, forex, or crypto.

- **Service**: `twelve_data`
- **Action**: `market_movers`
- **Action id**: `twelve_data.market_movers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "market_movers"
```

## Run

```bash
oo connector run "twelve_data" --action "market_movers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
