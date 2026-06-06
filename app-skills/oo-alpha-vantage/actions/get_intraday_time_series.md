# Alpha Vantage · `get_intraday_time_series`

Retrieve raw intraday OHLCV time series data for a stock symbol from Alpha Vantage.

- **Service**: `alpha_vantage`
- **Action**: `get_intraday_time_series`
- **Action id**: `alpha_vantage.get_intraday_time_series`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_intraday_time_series"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_intraday_time_series" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
