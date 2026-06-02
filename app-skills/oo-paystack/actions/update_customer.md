# Paystack · `update_customer`

Update a Paystack customer by customer code.

- **Service**: `paystack`
- **Action**: `update_customer`
- **Action id**: `paystack.update_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "update_customer"
```

## Run

```bash
oo connector run "paystack" --action "update_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Paystack state. Confirm the exact payload and intended effect with the user before running.
