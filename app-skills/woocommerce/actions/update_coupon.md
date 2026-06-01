# WooCommerce · `update_coupon`

Update a WooCommerce coupon by coupon ID.

- **Service**: `woocommerce`
- **Action**: `update_coupon`
- **Action id**: `woocommerce.update_coupon`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "update_coupon"
```

## Run

```bash
oo connector run "woocommerce" --action "update_coupon" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
