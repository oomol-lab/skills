# Zoom · `get_user`

Fetch one Zoom user by user ID, email address, or me when supported by the app.

- **Service**: `zoom`
- **Action**: `get_user`
- **Action id**: `zoom.get_user`
- **Required scopes**: user:read:user:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "get_user"
```

## Run

```bash
oo connector run "zoom" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
