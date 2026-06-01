# WooCommerce · `list_product_attributes`

List WooCommerce product attributes.

- **Service**: `woocommerce`
- **Action**: `list_product_attributes`
- **Action id**: `woocommerce.list_product_attributes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_product_attributes"
```

## Run

```bash
oo connector run "woocommerce" --action "list_product_attributes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
