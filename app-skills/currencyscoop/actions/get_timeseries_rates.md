# CurrencyBeacon · `get_timeseries_rates`

Retrieve exchange rates across a date range from CurrencyBeacon.

- **Service**: `currencyscoop`
- **Action**: `get_timeseries_rates`
- **Action id**: `currencyscoop.get_timeseries_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyscoop" --action "get_timeseries_rates"
```

## Run

```bash
oo connector run "currencyscoop" --action "get_timeseries_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
