# Monday · `edit_update`

Edit an existing Monday update.

- **Service**: `monday`
- **Action**: `edit_update`
- **Action id**: `monday.edit_update`
- **Required scopes**: updates:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "edit_update"
```

## Run

```bash
oo connector run "monday" --action "edit_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
