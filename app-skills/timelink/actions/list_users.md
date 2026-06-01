# timelink · `list_users`

List Timelink users with optional filtering and pagination parameters.

- **Service**: `timelink`
- **Action**: `list_users`
- **Action id**: `timelink.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_users"
```

## Run

```bash
oo connector run "timelink" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
