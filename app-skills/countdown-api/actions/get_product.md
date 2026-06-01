# Countdown API · `get_product`

Retrieve eBay product details by product ID through Countdown API.

- **Service**: `countdown_api`
- **Action**: `get_product`
- **Action id**: `countdown_api.get_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "countdown_api" --action "get_product"
```

## Run

```bash
oo connector run "countdown_api" --action "get_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
