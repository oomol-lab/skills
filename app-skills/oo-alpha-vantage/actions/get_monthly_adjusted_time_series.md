# Alpha Vantage · `get_monthly_adjusted_time_series`

Retrieve raw monthly adjusted OHLCV and dividend data for a stock symbol from Alpha Vantage.

- **Service**: `alpha_vantage`
- **Action**: `get_monthly_adjusted_time_series`
- **Action id**: `alpha_vantage.get_monthly_adjusted_time_series`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_monthly_adjusted_time_series"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_monthly_adjusted_time_series" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
