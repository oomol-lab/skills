# ClickUp · `get_user`

Get a ClickUp workspace user by user ID.

- **Service**: `clickup`
- **Action**: `get_user`
- **Action id**: `clickup.get_user`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_user"
```

## Run

```bash
oo connector run "clickup" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
