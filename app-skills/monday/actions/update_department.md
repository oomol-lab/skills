# Monday · `update_department`

Update a Monday department on an enterprise account.

- **Service**: `monday`
- **Action**: `update_department`
- **Action id**: `monday.update_department`
- **Required scopes**: departments:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "update_department"
```

## Run

```bash
oo connector run "monday" --action "update_department" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
