# WooCommerce · `list_product_categories`

List WooCommerce product categories with filters and pagination metadata.

- **Service**: `woocommerce`
- **Action**: `list_product_categories`
- **Action id**: `woocommerce.list_product_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_product_categories"
```

## Run

```bash
oo connector run "woocommerce" --action "list_product_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
