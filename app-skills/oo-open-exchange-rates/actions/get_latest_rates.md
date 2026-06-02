# Open Exchange Rates · `get_latest_rates`

Retrieve the latest Open Exchange Rates exchange rates.

- **Service**: `open_exchange_rates`
- **Action**: `get_latest_rates`
- **Action id**: `open_exchange_rates.get_latest_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "open_exchange_rates" --action "get_latest_rates"
```

## Run

```bash
oo connector run "open_exchange_rates" --action "get_latest_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
