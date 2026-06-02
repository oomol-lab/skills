# Monday · `create_update`

Create a Monday update on an item or as a reply to an existing update.

- **Service**: `monday`
- **Action**: `create_update`
- **Action id**: `monday.create_update`
- **Required scopes**: updates:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_update"
```

## Run

```bash
oo connector run "monday" --action "create_update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
