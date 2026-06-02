# WooCommerce · `list_customers`

List WooCommerce customers with common filters and pagination metadata.

- **Service**: `woocommerce`
- **Action**: `list_customers`
- **Action id**: `woocommerce.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_customers"
```

## Run

```bash
oo connector run "woocommerce" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
