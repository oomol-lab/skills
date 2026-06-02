# Fireflies · `list_user_groups`

List Fireflies user groups visible to the current API key.

- **Service**: `fireflies`
- **Action**: `list_user_groups`
- **Action id**: `fireflies.list_user_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_user_groups"
```

## Run

```bash
oo connector run "fireflies" --action "list_user_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
