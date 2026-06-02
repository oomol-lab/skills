# Postman · `get_all_team_users`

Tool to get information about all users on the Postman team. Use when you need to list all team members and their details including roles and join dates. Returns an array of user objects with their IDs, names, usernames, emails, roles, and join timestamps.

- **Service**: `postman`
- **Action**: `get_all_team_users`
- **Action id**: `postman.get_all_team_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_team_users"
```

## Run

```bash
oo connector run "postman" --action "get_all_team_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
