# Open Exchange Rates · `get_historical_rates`

Retrieve historical Open Exchange Rates exchange rates for a specific date.

- **Service**: `open_exchange_rates`
- **Action**: `get_historical_rates`
- **Action id**: `open_exchange_rates.get_historical_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "open_exchange_rates" --action "get_historical_rates"
```

## Run

```bash
oo connector run "open_exchange_rates" --action "get_historical_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
