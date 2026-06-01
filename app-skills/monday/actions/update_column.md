# Monday · `update_column`

Update a Monday column with the official update_column mutation.

- **Service**: `monday`
- **Action**: `update_column`
- **Action id**: `monday.update_column`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "update_column"
```

## Run

```bash
oo connector run "monday" --action "update_column" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
