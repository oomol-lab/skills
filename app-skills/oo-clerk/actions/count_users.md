# Clerk · `count_users`

Count Clerk users with optional filters.

- **Service**: `clerk`
- **Action**: `count_users`
- **Action id**: `clerk.count_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "count_users"
```

## Run

```bash
oo connector run "clerk" --action "count_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
