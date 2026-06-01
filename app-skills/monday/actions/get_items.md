# Monday · `get_items`

Retrieve specific Monday items by ID.

- **Service**: `monday`
- **Action**: `get_items`
- **Action id**: `monday.get_items`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "get_items"
```

## Run

```bash
oo connector run "monday" --action "get_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
