# Paystack · `get_transaction`

Fetch a Paystack transaction by transaction ID.

- **Service**: `paystack`
- **Action**: `get_transaction`
- **Action id**: `paystack.get_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "get_transaction"
```

## Run

```bash
oo connector run "paystack" --action "get_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
