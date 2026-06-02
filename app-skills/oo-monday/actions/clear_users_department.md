# Monday · `clear_users_department`

Clear department assignments from Monday users on an enterprise account.

- **Service**: `monday`
- **Action**: `clear_users_department`
- **Action id**: `monday.clear_users_department`
- **Required scopes**: departments:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "clear_users_department"
```

## Run

```bash
oo connector run "monday" --action "clear_users_department" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
