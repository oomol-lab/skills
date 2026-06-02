# Foxit Cloud API · `get_user_stock`

Fetch the remaining Foxit Services API and Embed API quota for the connected credential.

- **Service**: `fuxin`
- **Action**: `get_user_stock`
- **Action id**: `fuxin.get_user_stock`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "get_user_stock"
```

## Run

```bash
oo connector run "fuxin" --action "get_user_stock" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
