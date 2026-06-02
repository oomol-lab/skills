# Lemon Squeezy · `list_products`

List Lemon Squeezy products with optional store filtering and pagination.

- **Service**: `lemon_squeezy`
- **Action**: `list_products`
- **Action id**: `lemon_squeezy.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "list_products"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
