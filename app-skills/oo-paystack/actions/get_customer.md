# Paystack · `get_customer`

Fetch a customer in Paystack by email address or customer code.

- **Service**: `paystack`
- **Action**: `get_customer`
- **Action id**: `paystack.get_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "get_customer"
```

## Run

```bash
oo connector run "paystack" --action "get_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
