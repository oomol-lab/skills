# CurrencyBeacon · `convert_currency`

Convert an amount between two currencies using CurrencyBeacon exchange rates.

- **Service**: `currencyscoop`
- **Action**: `convert_currency`
- **Action id**: `currencyscoop.convert_currency`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyscoop" --action "convert_currency"
```

## Run

```bash
oo connector run "currencyscoop" --action "convert_currency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
