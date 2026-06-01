# Monday · `update_board`

Update a Monday board attribute with the official update_board mutation.

- **Service**: `monday`
- **Action**: `update_board`
- **Action id**: `monday.update_board`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "update_board"
```

## Run

```bash
oo connector run "monday" --action "update_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
