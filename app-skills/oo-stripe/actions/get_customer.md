# Stripe · `get_customer`

Retrieve a Stripe customer by ID.

- **Service**: `stripe`
- **Action**: `get_customer`
- **Action id**: `stripe.get_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "get_customer"
```

## Run

```bash
oo connector run "stripe" --action "get_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
