# Postman · `get_all_workspaces`

Tool to get all workspaces accessible to the authenticated user with optional type filtering. Use when you need to list or retrieve workspaces from Postman. Returns an array of workspace objects with their IDs, names, and types.

- **Service**: `postman`
- **Action**: `get_all_workspaces`
- **Action id**: `postman.get_all_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_workspaces"
```

## Run

```bash
oo connector run "postman" --action "get_all_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
