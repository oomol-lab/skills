# WooCommerce · `list_order_notes`

List notes for one WooCommerce order.

- **Service**: `woocommerce`
- **Action**: `list_order_notes`
- **Action id**: `woocommerce.list_order_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "list_order_notes"
```

## Run

```bash
oo connector run "woocommerce" --action "list_order_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
