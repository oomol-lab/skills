# Postman · `get_authenticated_user`

Tool to get information about the authenticated user. Use when you need to retrieve details about the current authenticated user, including their user ID, username, and email address.

- **Service**: `postman`
- **Action**: `get_authenticated_user`
- **Action id**: `postman.get_authenticated_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_authenticated_user"
```

## Run

```bash
oo connector run "postman" --action "get_authenticated_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
