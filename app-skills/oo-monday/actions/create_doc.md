# Monday · `create_doc`

Create a Monday doc in a workspace or document column location.

- **Service**: `monday`
- **Action**: `create_doc`
- **Action id**: `monday.create_doc`
- **Required scopes**: docs:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "create_doc"
```

## Run

```bash
oo connector run "monday" --action "create_doc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
