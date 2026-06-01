# Postman · `get_a_team_user`

Tool to get information about a user on the Postman team. Use when you need to retrieve details about a specific team member including their ID, name, email, roles, and join date.

- **Service**: `postman`
- **Action**: `get_a_team_user`
- **Action id**: `postman.get_a_team_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_team_user"
```

## Run

```bash
oo connector run "postman" --action "get_a_team_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
