# WooCommerce · `create_product_variation`

Create a variation for one WooCommerce variable product.

- **Service**: `woocommerce`
- **Action**: `create_product_variation`
- **Action id**: `woocommerce.create_product_variation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "create_product_variation"
```

## Run

```bash
oo connector run "woocommerce" --action "create_product_variation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
