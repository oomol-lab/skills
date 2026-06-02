# WooCommerce · `get_product`

Fetch one WooCommerce product by product ID.

- **Service**: `woocommerce`
- **Action**: `get_product`
- **Action id**: `woocommerce.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "get_product"
```

## Run

```bash
oo connector run "woocommerce" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
