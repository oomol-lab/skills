# WooCommerce · `list_coupons`

List WooCommerce coupons with common code search and pagination metadata.

- **Service**: `woocommerce`
- **Action**: `list_coupons`
- **Action id**: `woocommerce.list_coupons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_coupons"
```

## Run

```bash
oo connector run "woocommerce" --action "list_coupons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
