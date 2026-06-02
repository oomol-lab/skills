# Headout · `list_products_by_city`

List Headout product listings for a city.

- **Service**: `headout`
- **Action**: `list_products_by_city`
- **Action id**: `headout.list_products_by_city`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "list_products_by_city"
```

## Run

```bash
oo connector run "headout" --action "list_products_by_city" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
