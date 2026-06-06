# Alpha Vantage · `get_currency_exchange_rate`

Retrieve the raw realtime exchange rate for a currency pair.

- **Service**: `alpha_vantage`
- **Action**: `get_currency_exchange_rate`
- **Action id**: `alpha_vantage.get_currency_exchange_rate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_currency_exchange_rate"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_currency_exchange_rate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
