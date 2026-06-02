# ClickUp · `update_space`

Update a ClickUp space by space ID.

- **Service**: `clickup`
- **Action**: `update_space`
- **Action id**: `clickup.update_space`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "update_space"
```

## Run

```bash
oo connector run "clickup" --action "update_space" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
