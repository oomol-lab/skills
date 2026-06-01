# WooCommerce · `list_product_tags`

List WooCommerce product tags with filters and pagination metadata.

- **Service**: `woocommerce`
- **Action**: `list_product_tags`
- **Action id**: `woocommerce.list_product_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_product_tags"
```

## Run

```bash
oo connector run "woocommerce" --action "list_product_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
