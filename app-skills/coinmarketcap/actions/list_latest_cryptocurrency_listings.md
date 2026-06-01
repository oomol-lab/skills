# CoinMarketCap · `list_latest_cryptocurrency_listings`

Retrieve the latest cryptocurrency listings ordered by CoinMarketCap ranking and filters.

- **Service**: `coinmarketcap`
- **Action**: `list_latest_cryptocurrency_listings`
- **Action id**: `coinmarketcap.list_latest_cryptocurrency_listings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "list_latest_cryptocurrency_listings"
```

## Run

```bash
oo connector run "coinmarketcap" --action "list_latest_cryptocurrency_listings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
