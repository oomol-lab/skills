# Gumroad · `resend_sale_receipt`

Resend a Gumroad sale receipt to the buyer.

- **Service**: `gumroad`
- **Action**: `resend_sale_receipt`
- **Action id**: `gumroad.resend_sale_receipt`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "resend_sale_receipt"
```

## Run

```bash
oo connector run "gumroad" --action "resend_sale_receipt" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
