# WooCommerce · `get_product_variation`

Fetch one WooCommerce product variation by product and variation ID.

- **Service**: `woocommerce`
- **Action**: `get_product_variation`
- **Action id**: `woocommerce.get_product_variation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "get_product_variation"
```

## Run

```bash
oo connector run "woocommerce" --action "get_product_variation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
