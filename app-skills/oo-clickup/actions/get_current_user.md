# ClickUp · `get_current_user`

Get the authenticated ClickUp user profile.

- **Service**: `clickup`
- **Action**: `get_current_user`
- **Action id**: `clickup.get_current_user`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_current_user"
```

## Run

```bash
oo connector run "clickup" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
