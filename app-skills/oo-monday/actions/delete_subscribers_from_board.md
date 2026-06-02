# Monday · `delete_subscribers_from_board`

Remove Monday user subscribers from a board.

- **Service**: `monday`
- **Action**: `delete_subscribers_from_board`
- **Action id**: `monday.delete_subscribers_from_board`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "delete_subscribers_from_board"
```

## Run

```bash
oo connector run "monday" --action "delete_subscribers_from_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
