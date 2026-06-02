# Linear · `list_linear_users`

List Linear users in the current workspace and support cursor paging.

- **Service**: `linear`
- **Action**: `list_linear_users`
- **Action id**: `linear.list_linear_users`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_users"
```

## Run

```bash
oo connector run "linear" --action "list_linear_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
