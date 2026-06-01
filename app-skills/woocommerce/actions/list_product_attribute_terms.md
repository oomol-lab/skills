# WooCommerce · `list_product_attribute_terms`

List terms for one WooCommerce product attribute.

- **Service**: `woocommerce`
- **Action**: `list_product_attribute_terms`
- **Action id**: `woocommerce.list_product_attribute_terms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_product_attribute_terms"
```

## Run

```bash
oo connector run "woocommerce" --action "list_product_attribute_terms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
