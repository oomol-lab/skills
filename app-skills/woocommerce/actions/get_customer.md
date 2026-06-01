# WooCommerce · `get_customer`

Fetch one WooCommerce customer by customer ID.

- **Service**: `woocommerce`
- **Action**: `get_customer`
- **Action id**: `woocommerce.get_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "get_customer"
```

## Run

```bash
oo connector run "woocommerce" --action "get_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
