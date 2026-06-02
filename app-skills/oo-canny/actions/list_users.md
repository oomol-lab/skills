# Canny · `list_users`

List Canny users with cursor-based pagination.

- **Service**: `canny`
- **Action**: `list_users`
- **Action id**: `canny.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "list_users"
```

## Run

```bash
oo connector run "canny" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
