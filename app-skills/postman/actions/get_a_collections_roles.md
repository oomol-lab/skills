# Postman · `get_a_collections_roles`

Tool to get information about all roles in a collection. Use when you need to retrieve the IDs of all users, teams, and groups with access to view or edit a collection.

- **Service**: `postman`
- **Action**: `get_a_collections_roles`
- **Action id**: `postman.get_a_collections_roles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_collections_roles"
```

## Run

```bash
oo connector run "postman" --action "get_a_collections_roles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
