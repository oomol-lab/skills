# CoinMarketCap · `convert_price`

Convert an asset amount into another fiat or cryptocurrency using CoinMarketCap pricing.

- **Service**: `coinmarketcap`
- **Action**: `convert_price`
- **Action id**: `coinmarketcap.convert_price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "convert_price"
```

## Run

```bash
oo connector run "coinmarketcap" --action "convert_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
