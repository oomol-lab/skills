# Gumroad · `list_products`

List products owned by the authenticated Gumroad user.

- **Service**: `gumroad`
- **Action**: `list_products`
- **Action id**: `gumroad.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "list_products"
```

## Run

```bash
oo connector run "gumroad" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
