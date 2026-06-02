# Notion · `list_users`

List users in the Notion workspace with pagination.

- **Service**: `notion`
- **Action**: `list_users`
- **Action id**: `notion.list_users`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "list_users"
```

## Run

```bash
oo connector run "notion" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
