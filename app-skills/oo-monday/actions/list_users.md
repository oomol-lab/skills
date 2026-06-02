# Monday · `list_users`

List Monday users with official root-level filters and pagination.

- **Service**: `monday`
- **Action**: `list_users`
- **Action id**: `monday.list_users`
- **Required scopes**: users:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_users"
```

## Run

```bash
oo connector run "monday" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
