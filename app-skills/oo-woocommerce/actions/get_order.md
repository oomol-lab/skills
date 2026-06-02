# WooCommerce · `get_order`

Fetch one WooCommerce order by order ID.

- **Service**: `woocommerce`
- **Action**: `get_order`
- **Action id**: `woocommerce.get_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "get_order"
```

## Run

```bash
oo connector run "woocommerce" --action "get_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
