# CurrencyBeacon · `get_currencies`

Retrieve the supported currencies exposed by CurrencyBeacon.

- **Service**: `currencyscoop`
- **Action**: `get_currencies`
- **Action id**: `currencyscoop.get_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyscoop" --action "get_currencies"
```

## Run

```bash
oo connector run "currencyscoop" --action "get_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
