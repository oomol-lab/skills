# Monday · `change_item_position`

Change a Monday item's position on the same board.

- **Service**: `monday`
- **Action**: `change_item_position`
- **Action id**: `monday.change_item_position`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "change_item_position"
```

## Run

```bash
oo connector run "monday" --action "change_item_position" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
