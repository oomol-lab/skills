# Goody · `list_products`

List active products in the Goody catalog.

- **Service**: `goody`
- **Action**: `list_products`
- **Action id**: `goody.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "list_products"
```

## Run

```bash
oo connector run "goody" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
