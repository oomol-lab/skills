# CoinMarketCal · `list_confirmed_events`

List CoinMarketCal events confirmed by project representatives.

- **Service**: `coinmarketcal`
- **Action**: `list_confirmed_events`
- **Action id**: `coinmarketcal.list_confirmed_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcal" --action "list_confirmed_events"
```

## Run

```bash
oo connector run "coinmarketcal" --action "list_confirmed_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
