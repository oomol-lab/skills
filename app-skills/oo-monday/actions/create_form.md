# Monday · `create_form`

Create a Monday Workform and its destination responses board.

- **Service**: `monday`
- **Action**: `create_form`
- **Action id**: `monday.create_form`
- **Required scopes**: forms:write, boards:write, workspaces:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_form"
```

## Run

```bash
oo connector run "monday" --action "create_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
