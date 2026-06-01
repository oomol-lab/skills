# TaxJar · `list_refund_transactions`

List TaxJar refund transaction identifiers within a date range.

- **Service**: `taxjar`
- **Action**: `list_refund_transactions`
- **Action id**: `taxjar.list_refund_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "list_refund_transactions"
```

## Run

```bash
oo connector run "taxjar" --action "list_refund_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
