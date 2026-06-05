# Userflow · `list_users`

List Userflow users with optional cursor pagination and filters.

- **Service**: `userflow`
- **Action**: `list_users`
- **Action id**: `userflow.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "list_users"
```

## Run

```bash
oo connector run "userflow" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
