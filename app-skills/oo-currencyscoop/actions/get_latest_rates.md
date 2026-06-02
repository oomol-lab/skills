# CurrencyBeacon · `get_latest_rates`

Retrieve the latest exchange rates for a base currency from CurrencyBeacon.

- **Service**: `currencyscoop`
- **Action**: `get_latest_rates`
- **Action id**: `currencyscoop.get_latest_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyscoop" --action "get_latest_rates"
```

## Run

```bash
oo connector run "currencyscoop" --action "get_latest_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
