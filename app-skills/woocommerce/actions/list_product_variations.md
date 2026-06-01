# WooCommerce · `list_product_variations`

List variations for one WooCommerce variable product.

- **Service**: `woocommerce`
- **Action**: `list_product_variations`
- **Action id**: `woocommerce.list_product_variations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_product_variations"
```

## Run

```bash
oo connector run "woocommerce" --action "list_product_variations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
