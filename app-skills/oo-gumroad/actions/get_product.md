# Gumroad · `get_product`

Retrieve one Gumroad product by ID.

- **Service**: `gumroad`
- **Action**: `get_product`
- **Action id**: `gumroad.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "get_product"
```

## Run

```bash
oo connector run "gumroad" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
