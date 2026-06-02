# Monday · `list_assets`

Retrieve one or more Monday assets by asset ID.

- **Service**: `monday`
- **Action**: `list_assets`
- **Action id**: `monday.list_assets`
- **Required scopes**: assets:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_assets"
```

## Run

```bash
oo connector run "monday" --action "list_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
