# Paystack · `list_transactions`

List transactions available in Paystack.

- **Service**: `paystack`
- **Action**: `list_transactions`
- **Action id**: `paystack.list_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "paystack" --action "list_transactions"
```

## Run

```bash
oo connector run "paystack" --action "list_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
