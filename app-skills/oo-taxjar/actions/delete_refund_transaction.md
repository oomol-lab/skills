# TaxJar · `delete_refund_transaction`

Delete a TaxJar refund transaction by identifier.

- **Service**: `taxjar`
- **Action**: `delete_refund_transaction`
- **Action id**: `taxjar.delete_refund_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "delete_refund_transaction"
```

## Run

```bash
oo connector run "taxjar" --action "delete_refund_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites TaxJar data. Always confirm the target and get explicit user approval before running.
