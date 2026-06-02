# Monday · `assign_department_members`

Assign users to a Monday department on an enterprise account.

- **Service**: `monday`
- **Action**: `assign_department_members`
- **Action id**: `monday.assign_department_members`
- **Required scopes**: departments:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "assign_department_members"
```

## Run

```bash
oo connector run "monday" --action "assign_department_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
