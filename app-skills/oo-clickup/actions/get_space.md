# ClickUp · `get_space`

Get a ClickUp space by space ID.

- **Service**: `clickup`
- **Action**: `get_space`
- **Action id**: `clickup.get_space`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_space"
```

## Run

```bash
oo connector run "clickup" --action "get_space" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
