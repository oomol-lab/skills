# Zoom · `list_users`

List users in the Zoom account visible to the connected OAuth app.

- **Service**: `zoom`
- **Action**: `list_users`
- **Action id**: `zoom.list_users`
- **Required scopes**: user:read:list_users:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_users"
```

## Run

```bash
oo connector run "zoom" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
