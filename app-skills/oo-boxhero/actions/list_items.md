# BoxHero · `list_items`

List BoxHero inventory items with optional location filters and cursor pagination.

- **Service**: `boxhero`
- **Action**: `list_items`
- **Action id**: `boxhero.list_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boxhero" --action "list_items"
```

## Run

```bash
oo connector run "boxhero" --action "list_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
