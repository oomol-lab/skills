# APIVerve · `convert_currency`

Convert an amount between currencies using APIVerve Currency Converter.

- **Service**: `apiverve`
- **Action**: `convert_currency`
- **Action id**: `apiverve.convert_currency`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "convert_currency"
```

## Run

```bash
oo connector run "apiverve" --action "convert_currency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
