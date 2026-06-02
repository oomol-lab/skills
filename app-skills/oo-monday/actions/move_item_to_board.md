# Monday · `move_item_to_board`

Move a Monday item to another board and target group.

- **Service**: `monday`
- **Action**: `move_item_to_board`
- **Action id**: `monday.move_item_to_board`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "move_item_to_board"
```

## Run

```bash
oo connector run "monday" --action "move_item_to_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
