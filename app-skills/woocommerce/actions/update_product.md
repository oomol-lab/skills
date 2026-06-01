# WooCommerce · `update_product`

Update a WooCommerce product by product ID.

- **Service**: `woocommerce`
- **Action**: `update_product`
- **Action id**: `woocommerce.update_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "update_product"
```

## Run

```bash
oo connector run "woocommerce" --action "update_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
