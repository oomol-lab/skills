# CoinMarketCal · `list_ranked_events`

List CoinMarketCal events ranked by market attention or impact.

- **Service**: `coinmarketcal`
- **Action**: `list_ranked_events`
- **Action id**: `coinmarketcal.list_ranked_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcal" --action "list_ranked_events"
```

## Run

```bash
oo connector run "coinmarketcal" --action "list_ranked_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
