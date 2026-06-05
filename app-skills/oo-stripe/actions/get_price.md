# Stripe · `get_price`

Retrieve a Stripe price by ID.

- **Service**: `stripe`
- **Action**: `get_price`
- **Action id**: `stripe.get_price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "get_price"
```

## Run

```bash
oo connector run "stripe" --action "get_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
