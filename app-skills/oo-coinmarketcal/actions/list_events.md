# CoinMarketCal · `list_events`

List CoinMarketCal events with optional filters.

- **Service**: `coinmarketcal`
- **Action**: `list_events`
- **Action id**: `coinmarketcal.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcal" --action "list_events"
```

## Run

```bash
oo connector run "coinmarketcal" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
