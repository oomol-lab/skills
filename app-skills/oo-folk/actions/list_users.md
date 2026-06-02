# folk · `list_users`

List workspace users from Folk with cursor pagination.

- **Service**: `folk`
- **Action**: `list_users`
- **Action id**: `folk.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "list_users"
```

## Run

```bash
oo connector run "folk" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
