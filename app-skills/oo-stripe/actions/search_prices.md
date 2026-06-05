# Stripe · `search_prices`

Search Stripe prices with Stripe's search query syntax.

- **Service**: `stripe`
- **Action**: `search_prices`
- **Action id**: `stripe.search_prices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "search_prices"
```

## Run

```bash
oo connector run "stripe" --action "search_prices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
