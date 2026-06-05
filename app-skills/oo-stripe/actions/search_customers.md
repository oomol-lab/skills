# Stripe · `search_customers`

Search Stripe customers with Stripe's search query syntax.

- **Service**: `stripe`
- **Action**: `search_customers`
- **Action id**: `stripe.search_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "search_customers"
```

## Run

```bash
oo connector run "stripe" --action "search_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
