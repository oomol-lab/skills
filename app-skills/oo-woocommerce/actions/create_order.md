# WooCommerce · `create_order`

Create a WooCommerce order with customer, address, line item, and coupon fields.

- **Service**: `woocommerce`
- **Action**: `create_order`
- **Action id**: `woocommerce.create_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "create_order"
```

## Run

```bash
oo connector run "woocommerce" --action "create_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
