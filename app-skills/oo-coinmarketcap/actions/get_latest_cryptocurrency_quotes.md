# CoinMarketCap · `get_latest_cryptocurrency_quotes`

Retrieve the latest quotes for one or more cryptocurrencies by id, symbol, or slug.

- **Service**: `coinmarketcap`
- **Action**: `get_latest_cryptocurrency_quotes`
- **Action id**: `coinmarketcap.get_latest_cryptocurrency_quotes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "get_latest_cryptocurrency_quotes"
```

## Run

```bash
oo connector run "coinmarketcap" --action "get_latest_cryptocurrency_quotes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
