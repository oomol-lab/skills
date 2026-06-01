# Headout · `get_product`

Get one Headout product with variants and pricing.

- **Service**: `headout`
- **Action**: `get_product`
- **Action id**: `headout.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "get_product"
```

## Run

```bash
oo connector run "headout" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
