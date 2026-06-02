# Open Exchange Rates · `get_timeseries_rates`

Retrieve Open Exchange Rates exchange rates across a date range.

- **Service**: `open_exchange_rates`
- **Action**: `get_timeseries_rates`
- **Action id**: `open_exchange_rates.get_timeseries_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "open_exchange_rates" --action "get_timeseries_rates"
```

## Run

```bash
oo connector run "open_exchange_rates" --action "get_timeseries_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
