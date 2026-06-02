# Twelve Data · `time_series`

Fetch historical OHLCV time-series data with metadata for a specific instrument and interval.

- **Service**: `twelve_data`
- **Action**: `time_series`
- **Action id**: `twelve_data.time_series`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "time_series"
```

## Run

```bash
oo connector run "twelve_data" --action "time_series" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
