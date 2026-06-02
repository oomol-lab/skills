# Paystack · `create_customer`

Create a customer in Paystack.

- **Service**: `paystack`
- **Action**: `create_customer`
- **Action id**: `paystack.create_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "create_customer"
```

## Run

```bash
oo connector run "paystack" --action "create_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Paystack state. Confirm the exact payload and intended effect with the user before running.
