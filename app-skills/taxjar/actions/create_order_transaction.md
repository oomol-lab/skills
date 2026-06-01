# TaxJar · `create_order_transaction`

Create a TaxJar order transaction for reporting and filing.

- **Service**: `taxjar`
- **Action**: `create_order_transaction`
- **Action id**: `taxjar.create_order_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "create_order_transaction"
```

## Run

```bash
oo connector run "taxjar" --action "create_order_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TaxJar state. Confirm the exact payload and intended effect with the user before running.
