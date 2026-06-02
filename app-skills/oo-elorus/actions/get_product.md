# Elorus · `get_product`

Get one Elorus product or service by ID.

- **Service**: `elorus`
- **Action**: `get_product`
- **Action id**: `elorus.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "get_product"
```

## Run

```bash
oo connector run "elorus" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
