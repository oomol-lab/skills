# WooCommerce · `get_coupon`

Fetch one WooCommerce coupon by coupon ID.

- **Service**: `woocommerce`
- **Action**: `get_coupon`
- **Action id**: `woocommerce.get_coupon`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "get_coupon"
```

## Run

```bash
oo connector run "woocommerce" --action "get_coupon" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
