# WooCommerce · `list_orders`

List WooCommerce orders with common status, customer, and date filters.

- **Service**: `woocommerce`
- **Action**: `list_orders`
- **Action id**: `woocommerce.list_orders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_orders"
```

## Run

```bash
oo connector run "woocommerce" --action "list_orders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
