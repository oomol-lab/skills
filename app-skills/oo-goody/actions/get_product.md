# Goody · `get_product`

Retrieve a Goody product by ID.

- **Service**: `goody`
- **Action**: `get_product`
- **Action id**: `goody.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "get_product"
```

## Run

```bash
oo connector run "goody" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
