# Monday · `create_dashboard`

Create a Monday dashboard with the official dashboard mutation.

- **Service**: `monday`
- **Action**: `create_dashboard`
- **Action id**: `monday.create_dashboard`
- **Required scopes**: boards:read, boards:write, workspaces:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_dashboard"
```

## Run

```bash
oo connector run "monday" --action "create_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
