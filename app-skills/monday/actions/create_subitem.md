# Monday · `create_subitem`

Create a Monday subitem under an existing parent item.

- **Service**: `monday`
- **Action**: `create_subitem`
- **Action id**: `monday.create_subitem`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_subitem"
```

## Run

```bash
oo connector run "monday" --action "create_subitem" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
