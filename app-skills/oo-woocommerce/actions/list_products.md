# WooCommerce · `list_products`

List WooCommerce products with common catalog filters and pagination metadata.

- **Service**: `woocommerce`
- **Action**: `list_products`
- **Action id**: `woocommerce.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_products"
```

## Run

```bash
oo connector run "woocommerce" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
