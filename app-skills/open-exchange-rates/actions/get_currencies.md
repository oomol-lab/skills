# Open Exchange Rates · `get_currencies`

Retrieve all currencies supported by Open Exchange Rates.

- **Service**: `open_exchange_rates`
- **Action**: `get_currencies`
- **Action id**: `open_exchange_rates.get_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "open_exchange_rates" --action "get_currencies"
```

## Run

```bash
oo connector run "open_exchange_rates" --action "get_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
