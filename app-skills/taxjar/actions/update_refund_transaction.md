# TaxJar · `update_refund_transaction`

Update an existing TaxJar refund transaction.

- **Service**: `taxjar`
- **Action**: `update_refund_transaction`
- **Action id**: `taxjar.update_refund_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "update_refund_transaction"
```

## Run

```bash
oo connector run "taxjar" --action "update_refund_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TaxJar state. Confirm the exact payload and intended effect with the user before running.
