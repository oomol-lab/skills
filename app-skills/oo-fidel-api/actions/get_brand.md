# Fidel API · `get_brand`

Fetch one Fidel brand by brand ID.

- **Service**: `fidel_api`
- **Action**: `get_brand`
- **Action id**: `fidel_api.get_brand`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fidel_api" --action "get_brand"
```

## Run

```bash
oo connector run "fidel_api" --action "get_brand" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
