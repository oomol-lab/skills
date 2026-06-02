# Paystack · `verify_transaction`

Verify a Paystack transaction by reference.

- **Service**: `paystack`
- **Action**: `verify_transaction`
- **Action id**: `paystack.verify_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "verify_transaction"
```

## Run

```bash
oo connector run "paystack" --action "verify_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
