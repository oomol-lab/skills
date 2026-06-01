# CoinMarketCal · `list_coins`

List available CoinMarketCal coins.

- **Service**: `coinmarketcal`
- **Action**: `list_coins`
- **Action id**: `coinmarketcal.list_coins`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcal" --action "list_coins"
```

## Run

```bash
oo connector run "coinmarketcal" --action "list_coins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
