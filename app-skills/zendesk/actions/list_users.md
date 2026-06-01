# Zendesk · `list_users`

List Zendesk users with optional role and pagination filters.

- **Service**: `zendesk`
- **Action**: `list_users`
- **Action id**: `zendesk.list_users`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "list_users"
```

## Run

```bash
oo connector run "zendesk" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
