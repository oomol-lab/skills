# Zoom · `get_user_summary`

Fetch Zoom account user summary metrics visible to the connected OAuth app.

- **Service**: `zoom`
- **Action**: `get_user_summary`
- **Action id**: `zoom.get_user_summary`
- **Required scopes**: user:read:summary:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "get_user_summary"
```

## Run

```bash
oo connector run "zoom" --action "get_user_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
