# CoinMarketCal · `list_event_categories`

List available CoinMarketCal event categories.

- **Service**: `coinmarketcal`
- **Action**: `list_event_categories`
- **Action id**: `coinmarketcal.list_event_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcal" --action "list_event_categories"
```

## Run

```bash
oo connector run "coinmarketcal" --action "list_event_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
