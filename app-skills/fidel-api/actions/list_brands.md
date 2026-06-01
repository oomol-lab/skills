# Fidel API · `list_brands`

List Fidel brands available to the connected secret API key.

- **Service**: `fidel_api`
- **Action**: `list_brands`
- **Action id**: `fidel_api.list_brands`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fidel_api" --action "list_brands"
```

## Run

```bash
oo connector run "fidel_api" --action "list_brands" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
