# Monday · `create_board`

Create a Monday board with the official create_board mutation.

- **Service**: `monday`
- **Action**: `create_board`
- **Action id**: `monday.create_board`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_board"
```

## Run

```bash
oo connector run "monday" --action "create_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
