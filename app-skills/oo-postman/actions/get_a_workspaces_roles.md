# Postman · `get_a_workspaces_roles`

Tool to get the roles of users, user groups, and partners in a workspace. Use when you need to retrieve role assignments and understand who has what level of access to a specific workspace.

- **Service**: `postman`
- **Action**: `get_a_workspaces_roles`
- **Action id**: `postman.get_a_workspaces_roles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_workspaces_roles"
```

## Run

```bash
oo connector run "postman" --action "get_a_workspaces_roles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
