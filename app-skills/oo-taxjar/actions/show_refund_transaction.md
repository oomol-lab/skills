# TaxJar · `show_refund_transaction`

Retrieve a TaxJar refund transaction by identifier.

- **Service**: `taxjar`
- **Action**: `show_refund_transaction`
- **Action id**: `taxjar.show_refund_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "show_refund_transaction"
```

## Run

```bash
oo connector run "taxjar" --action "show_refund_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
