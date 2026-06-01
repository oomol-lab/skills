# WooCommerce · `update_order`

Update a WooCommerce order by order ID.

- **Service**: `woocommerce`
- **Action**: `update_order`
- **Action id**: `woocommerce.update_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "update_order"
```

## Run

```bash
oo connector run "woocommerce" --action "update_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
