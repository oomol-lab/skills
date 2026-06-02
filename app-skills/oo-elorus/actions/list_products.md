# Elorus · `list_products`

List Elorus products or services with optional filters and pagination.

- **Service**: `elorus`
- **Action**: `list_products`
- **Action id**: `elorus.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "list_products"
```

## Run

```bash
oo connector run "elorus" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
