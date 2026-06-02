# Monday · `create_item`

Create a Monday item on a board, optionally setting column values and position.

- **Service**: `monday`
- **Action**: `create_item`
- **Action id**: `monday.create_item`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_item"
```

## Run

```bash
oo connector run "monday" --action "create_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
