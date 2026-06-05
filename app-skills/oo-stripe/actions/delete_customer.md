# Stripe · `delete_customer`

Delete a Stripe customer by ID.

- **Service**: `stripe`
- **Action**: `delete_customer`
- **Action id**: `stripe.delete_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stripe" --action "delete_customer"
```

## Run

```bash
oo connector run "stripe" --action "delete_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Stripe data. Always confirm the target and get explicit user approval before running.
