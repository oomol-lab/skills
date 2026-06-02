# Zendesk · `search_users`

Search Zendesk users by email address or name.

- **Service**: `zendesk`
- **Action**: `search_users`
- **Action id**: `zendesk.search_users`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "search_users"
```

## Run

```bash
oo connector run "zendesk" --action "search_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
