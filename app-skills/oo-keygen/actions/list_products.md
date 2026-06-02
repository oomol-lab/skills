# Keygen · `list_products`

List products in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `list_products`
- **Action id**: `keygen.list_products`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_products"
```

## Run

```bash
oo connector run "keygen" --action "list_products" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
