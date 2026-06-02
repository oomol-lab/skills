# Fireflies · `list_users`

List Fireflies users visible to the current API key.

- **Service**: `fireflies`
- **Action**: `list_users`
- **Action id**: `fireflies.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_users"
```

## Run

```bash
oo connector run "fireflies" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
