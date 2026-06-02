# Gumroad · `refund_sale`

Refund a Gumroad sale, optionally as a partial refund in cents.

- **Service**: `gumroad`
- **Action**: `refund_sale`
- **Action id**: `gumroad.refund_sale`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "refund_sale"
```

## Run

```bash
oo connector run "gumroad" --action "refund_sale" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
