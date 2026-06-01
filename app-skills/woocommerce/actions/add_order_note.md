# WooCommerce · `add_order_note`

Add an administrator or customer-visible note to one WooCommerce order.

- **Service**: `woocommerce`
- **Action**: `add_order_note`
- **Action id**: `woocommerce.add_order_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "add_order_note"
```

## Run

```bash
oo connector run "woocommerce" --action "add_order_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
