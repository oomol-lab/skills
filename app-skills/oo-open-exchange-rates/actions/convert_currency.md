# Open Exchange Rates · `convert_currency`

Convert an amount between two currencies using Open Exchange Rates.

- **Service**: `open_exchange_rates`
- **Action**: `convert_currency`
- **Action id**: `open_exchange_rates.convert_currency`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "open_exchange_rates" --action "convert_currency"
```

## Run

```bash
oo connector run "open_exchange_rates" --action "convert_currency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
