# Headout · `list_products_by_category`

List Headout product listings for a category.

- **Service**: `headout`
- **Action**: `list_products_by_category`
- **Action id**: `headout.list_products_by_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "list_products_by_category"
```

## Run

```bash
oo connector run "headout" --action "list_products_by_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
