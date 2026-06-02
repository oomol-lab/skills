# Monday · `get_board_memberships`

Retrieve the user and team memberships configured on a Monday board.

- **Service**: `monday`
- **Action**: `get_board_memberships`
- **Action id**: `monday.get_board_memberships`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "get_board_memberships"
```

## Run

```bash
oo connector run "monday" --action "get_board_memberships" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
