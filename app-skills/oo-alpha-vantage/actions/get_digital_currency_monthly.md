# Alpha Vantage · `get_digital_currency_monthly`

Retrieve raw monthly historical time series data for a digital currency.

- **Service**: `alpha_vantage`
- **Action**: `get_digital_currency_monthly`
- **Action id**: `alpha_vantage.get_digital_currency_monthly`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_digital_currency_monthly"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_digital_currency_monthly" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
