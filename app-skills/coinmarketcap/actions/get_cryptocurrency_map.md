# CoinMarketCap · `get_cryptocurrency_map`

Retrieve CoinMarketCap asset IDs, symbols, and slugs for cryptocurrency discovery.

- **Service**: `coinmarketcap`
- **Action**: `get_cryptocurrency_map`
- **Action id**: `coinmarketcap.get_cryptocurrency_map`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "get_cryptocurrency_map"
```

## Run

```bash
oo connector run "coinmarketcap" --action "get_cryptocurrency_map" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
