# Best Buy · `get_products`

List Best Buy products with optional SKU, UPC, name, category, or price filters.

- **Service**: `bestbuy`
- **Action**: `get_products`
- **Action id**: `bestbuy.get_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bestbuy" --action "get_products"
```

## Run

```bash
oo connector run "bestbuy" --action "get_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
