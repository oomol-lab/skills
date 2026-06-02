# BoxHero · `get_item`

Get a single BoxHero inventory item by item identifier.

- **Service**: `boxhero`
- **Action**: `get_item`
- **Action id**: `boxhero.get_item`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boxhero" --action "get_item"
```

## Run

```bash
oo connector run "boxhero" --action "get_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
