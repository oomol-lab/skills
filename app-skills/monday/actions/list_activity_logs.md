# Monday · `list_activity_logs`

List board-scoped Monday activity logs.

- **Service**: `monday`
- **Action**: `list_activity_logs`
- **Action id**: `monday.list_activity_logs`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_activity_logs"
```

## Run

```bash
oo connector run "monday" --action "list_activity_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
