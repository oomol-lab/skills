# Stripe · `list_prices`

List Stripe prices with optional product, active, type, and cursor filters.

- **Service**: `stripe`
- **Action**: `list_prices`
- **Action id**: `stripe.list_prices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "list_prices"
```

## Run

```bash
oo connector run "stripe" --action "list_prices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
