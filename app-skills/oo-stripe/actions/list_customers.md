# Stripe · `list_customers`

List Stripe customers with optional email, created timestamp, and cursor filters.

- **Service**: `stripe`
- **Action**: `list_customers`
- **Action id**: `stripe.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "list_customers"
```

## Run

```bash
oo connector run "stripe" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
