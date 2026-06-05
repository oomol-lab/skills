# Clerk · `list_users`

List Clerk users with optional filtering and pagination.

- **Service**: `clerk`
- **Action**: `list_users`
- **Action id**: `clerk.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "list_users"
```

## Run

```bash
oo connector run "clerk" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
