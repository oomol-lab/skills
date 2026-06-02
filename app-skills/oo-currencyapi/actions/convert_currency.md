# currencyapi · `convert_currency`

Convert a monetary amount into one or more currencies with currencyapi.

- **Service**: `currencyapi`
- **Action**: `convert_currency`
- **Action id**: `currencyapi.convert_currency`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currencyapi" --action "convert_currency"
```

## Run

```bash
oo connector run "currencyapi" --action "convert_currency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
