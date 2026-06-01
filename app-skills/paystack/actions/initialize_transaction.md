# Paystack · `initialize_transaction`

Initialize a Paystack transaction and return checkout details.

- **Service**: `paystack`
- **Action**: `initialize_transaction`
- **Action id**: `paystack.initialize_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "initialize_transaction"
```

## Run

```bash
oo connector run "paystack" --action "initialize_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
