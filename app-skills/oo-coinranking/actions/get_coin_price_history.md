# Coinranking · `get_coin_price_history`

Get historical price points for a single coin from Coinranking.

- **Service**: `coinranking`
- **Action**: `get_coin_price_history`
- **Action id**: `coinranking.get_coin_price_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "get_coin_price_history"
```

## Run

```bash
oo connector run "coinranking" --action "get_coin_price_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
