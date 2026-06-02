# Everhour · `list_users`

List the users in the Everhour team that the API key can access.

- **Service**: `everhour`
- **Action**: `list_users`
- **Action id**: `everhour.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "list_users"
```

## Run

```bash
oo connector run "everhour" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
