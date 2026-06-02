# Gumroad · `list_product_subscribers`

List active subscribers for one Gumroad product.

- **Service**: `gumroad`
- **Action**: `list_product_subscribers`
- **Action id**: `gumroad.list_product_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "list_product_subscribers"
```

## Run

```bash
oo connector run "gumroad" --action "list_product_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
