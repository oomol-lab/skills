# Keygen · `retrieve_product`

Retrieve one product from the connected Keygen account.

- **Service**: `keygen`
- **Action**: `retrieve_product`
- **Action id**: `keygen.retrieve_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "retrieve_product"
```

## Run

```bash
oo connector run "keygen" --action "retrieve_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
