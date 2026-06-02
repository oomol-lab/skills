# Zoom · `get_user_settings`

Fetch Zoom settings for one user, optionally limited to one settings group.

- **Service**: `zoom`
- **Action**: `get_user_settings`
- **Action id**: `zoom.get_user_settings`
- **Required scopes**: user:read:settings:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "get_user_settings"
```

## Run

```bash
oo connector run "zoom" --action "get_user_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
