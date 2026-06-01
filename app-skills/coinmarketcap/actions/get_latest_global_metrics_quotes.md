# CoinMarketCap · `get_latest_global_metrics_quotes`

Retrieve the latest global cryptocurrency market metrics and quote aggregates.

- **Service**: `coinmarketcap`
- **Action**: `get_latest_global_metrics_quotes`
- **Action id**: `coinmarketcap.get_latest_global_metrics_quotes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "get_latest_global_metrics_quotes"
```

## Run

```bash
oo connector run "coinmarketcap" --action "get_latest_global_metrics_quotes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
